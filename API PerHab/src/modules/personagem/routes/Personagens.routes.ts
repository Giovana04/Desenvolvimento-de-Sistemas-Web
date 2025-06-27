import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from "src/shared/http/middlewares/isAuthenticated";
import PersonagemController from "../controllers/PersonagemController";

const personagensRouter = Router();
const personagensController = new PersonagemController();

personagensRouter.get('/', isAuthenticated, async (req, res, next) => {
    try {
        await personagensController.index(req, res, next)
    } catch (err) {
        next(err)
    }
})

personagensRouter.get('/:id', isAuthenticated, celebrate({
    [Segments.PARAMS]: { id: Joi.string().uuid().required() }
}),
    async (req, res, next) => {
        try {
            await personagensController.show(req, res, next);
        } catch (err) {
            next(err);
        }
    });

personagensRouter.post('/', isAuthenticated, celebrate({
    [Segments.BODY]: {
        nome: Joi.string().required(),
        anime: Joi.string().required(),
    }
}),

    async (req, res, next) => {
        try {
            await personagensController.create(req, res, next);
        } catch (err) {
            next(err);
        }
    });


personagensRouter.put('/:id', isAuthenticated, celebrate({
    [Segments.PARAMS]: { id: Joi.string().uuid().required() },
    [Segments.BODY]: {
        nome: Joi.string().required(),
        anime: Joi.string().required(),
        arma: Joi.string().allow(null).optional(),
        vies: Joi.string().allow(null).optional(),
        img: Joi.string().allow(null).optional(),

    }
}), async (req, res, next) => {
    try {
        await personagensController.update(req, res, next);
    } catch (err) {
        next(err);
    }
});

personagensRouter.delete('/:id', isAuthenticated, celebrate({
    [Segments.PARAMS]: { id: Joi.string().uuid().required() }
}), async (req, res, next) => {
    try {
        await personagensController.delete(req, res, next);
    } catch (err) {
        next(err);
    }
});


export default personagensRouter;