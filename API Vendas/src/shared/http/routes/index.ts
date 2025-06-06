import productsRouter from "@modules/products/routes/products.routes";
import passwordRoutes from "@modules/users/routes/password.routes";
import sessionsRouter from "@modules/users/routes/sessions.routes";
import usersRouter from "@modules/users/routes/users.routes";
import { Router } from "express";
import customersRouter from "@modules/customers/routes/customers.routes";
import profileRouter from "@modules/users/routes/profile.routes";
import ordersRouter from "@modules/orders/routes/order.routes";

const routes = Router();
routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRoutes);
routes.use('/customers', customersRouter)
routes.use('/profile', profileRouter);
routes.use('/orders', ordersRouter);
export default routes;