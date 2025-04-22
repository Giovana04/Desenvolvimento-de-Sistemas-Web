
import ProductsRepository from "../typeorm/reporsitories/ProductsRepository";
import AppError from "src/shared/errors/AppError";
import Products from "../typeorm/entities/Products";
import { getCustomRepository } from "typeorm";

interface IRequest{
    id : string
}

export default class ShowProductServices{
    public async execute({id} : IRequest) : Promise<Products>{
        const productsRepository = getCustomRepository(ProductsRepository);
        const product = await productsRepository.findOne(id);
        if(!product){
            throw new AppError('Product not found')
        }
        return product;
    }
}