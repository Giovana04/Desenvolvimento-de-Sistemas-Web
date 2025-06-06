import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import OrdersController from '../controllers/OrdersController';
import isAuthenticated from 'src/shared/http/middlewares/isAuthenticated';

const ordersRouter = Router();
const ordersController = new OrdersController();

// Middleware para garantir que o usuário esteja autenticado
ordersRouter.use(isAuthenticated);

// Rota para listar todos os pedidos
ordersRouter.get("/", async (req, res, next) => {
  try {
    await ordersController.index(req, res, next);
  } catch (err) {
    next(err); // Encaminha o erro para o middleware de erro global
  }
});

// Rota para exibir um pedido específico
ordersRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: { id: Joi.string().uuid().required() } // Validação para garantir que o ID seja um UUID válido
  }),
  async (req, res, next) => {
    try {
      await ordersController.show(req, res, next);
    } catch (err) {
      next(err); // Encaminha o erro para o middleware de erro global
    }
  }
);

// Rota para criar um novo pedido
ordersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      customer_id: Joi.string().required(), // Validação para garantir que o customer_id seja informado
      products: Joi.required() // Validação para garantir que os produtos sejam passados corretamente
    }
  }),
  async (req, res, next) => {
    try {
      await ordersController.create(req, res, next);
    } catch (err) {
      next(err); // Encaminha o erro para o middleware de erro global
    }
  }
);

export default ordersRouter;
