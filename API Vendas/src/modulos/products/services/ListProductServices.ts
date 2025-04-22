import { getCustomRepository } from "typeorm";
import Product from "src/modulos/products/typeorm/entities/Products";
import ProductsRepository from "src/modulos/products/typeorm/reporsitories/ProductsRepository";

export default class ListProductService{
    public async execute() : Promise<Product[]>{
        const productsRepository = getCustomRepository(ProductsRepository);
        const products = await productsRepository.find();
        return products;
    }
}