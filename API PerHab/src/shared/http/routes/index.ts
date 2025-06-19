import passwordRoutes from "@modules/users/routes/password.routes";
import sessionsRouter from "@modules/users/routes/sessions.routes";
import usersRouter from "@modules/users/routes/users.routes";
import personagemRouter from "@modules/personagem/routes/Personagens.routes";
import { Router } from "express";
import habilidadeRouter from "@modules/habilidade/routes/Habilidade.routes";

const routes = Router();
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRoutes);
routes.use('/personagem', personagemRouter);
routes.use('/habilidade', habilidadeRouter);
export default routes;