
import ProductsRepository from "../typeorm/reporsitories/ProductsRepository";
import AppError from "src/shared/errors/AppError";
import Products from "../typeorm/entities/Products";
import { getCustomRepository } from "typeorm";

interface IRequest{
    name : string;
    price : number;
    quantity : number;
}

export default class CreateProductServices{
    public async execute({name, price, quantity} : IRequest) : Promise<Products>{
        const productsRepository = getCustomRepository(ProductsRepository);
        const productExists = await productsRepository.findByName(name);
        if(productExists){
            throw new AppError('There is already one product with this name')
        }
        const product = productsRepository.create({name, price, quantity})
        await productsRepository.save(product);
        return product;
    }
}