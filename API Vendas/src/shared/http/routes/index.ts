import {Router} from "express"
import productsRouter from "src/modulos/products/routes/products.routes"

const routes = Router()

routes.use('/products', productsRouter)

export default routes;