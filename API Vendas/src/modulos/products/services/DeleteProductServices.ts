
import ProductsRepository from "../typeorm/reporsitories/ProductsRepository";
import AppError from "src/shared/errors/AppError";
import Products from "../typeorm/entities/Products";
import { getCustomRepository } from "typeorm"

interface Irequest{
    id: string
}

export default class DeleteProductService{
    public async execute({id} : Irequest) : Promise<Products>{
        const productsRepository = getCustomRepository(ProductsRepository);
        const product = await productsRepository.findOne({id});
        if(!product){
            throw new AppError('product not found')
        }
        await productsRepository.remove(product);
        return product
    }
}