import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from "src/shared/http/middlewares/isAuthenticated";
import HabilidadeController from "../controllers/HabilidadeController";
import ListHabilidadeService from "../services/ListHabilidadeService";

const habilidadeRouter = Router();
const habilidadeController = new HabilidadeController();

habilidadeRouter.get('/', isAuthenticated, async (req, res, next) => {
    try {
        const { tipo } = req.query;

        const listHabilidade = new ListHabilidadeService();
        const habilidades = await listHabilidade.execute(tipo as string);

        res.json(habilidades);
    } catch (err) {
        next(err);
    }
});



habilidadeRouter.get('/:id', isAuthenticated, celebrate({
    [Segments.PARAMS]: { id: Joi.string().uuid().required() }
}),
    async (req, res, next) => {
        try {
            await habilidadeController.show(req, res, next);
        } catch (err) {
            next(err);
        }
    });


habilidadeRouter.post(
    "/",
    isAuthenticated,
    celebrate({
        [Segments.BODY]: Joi.object({
            nome: Joi.string().required(),
            descricao: Joi.string().required(),
            tipo: Joi.string().required(),
            energia_custo: Joi.string().required(),
            tempo_exe: Joi.string().required(),
            personagem_id: Joi.string().uuid().required(),
        }),
    }),
    async (req, res, next) => {
        try {
            await habilidadeController.create(req, res, next);
        } catch (err) {
            next(err);
        }
    }
);

habilidadeRouter.put(
    "/:id",
    isAuthenticated,
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
        [Segments.BODY]: Joi.object({
            nome: Joi.string().required(),
            descricao: Joi.string().required(),
            tipo: Joi.string().required(),
            energia_custo: Joi.string().required(),
            tempo_exe: Joi.string().required(),
            personagem_id: Joi.string().uuid().required(),
        }),
    }),
    async (req, res, next) => {
        try {
            await habilidadeController.update(req, res, next);
        } catch (err) {
            next(err);
        }
    }
);


habilidadeRouter.delete('/:id', isAuthenticated, celebrate({
    [Segments.PARAMS]: { id: Joi.string().uuid().required() }
}), async (req, res, next) => {
    try {
        await habilidadeController.delete(req, res, next);
    } catch (err) {
        next(err);
    }
});


export default habilidadeRouter;