
import ProductsRepository from "../typeorm/reporsitories/ProductsRepository";
import AppError from "src/shared/errors/AppError";
import Products from "../typeorm/entities/Products";
import { getCustomRepository } from "typeorm";

interface IRequest{
    id : string;
    name : string;
    price : number;
    quantity : number;
}

export default class UpdateProductServices{
    public async execute({id, name, price, quantity} : IRequest) : Promise<Products>{
        const productsRepository = getCustomRepository(ProductsRepository);
        const product = await productsRepository.findOne(id);
        if(!product){
            throw new AppError('Product not found')
        }
        const productExists = await productsRepository.findByName(name);
        if (productExists && name != product.name) {
            throw new AppError('Já tem um produto com esse nome')
        }
        product.name = name;
        product.quantity = quantity;
        product.price = price;
        return product;
    }
}