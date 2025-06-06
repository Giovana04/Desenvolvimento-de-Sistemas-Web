import { Entity, EntityRepository, In, Repository } from "typeorm";
import Product from "../entities/Product";
import { compare } from "bcryptjs";

interface IFindProducts {
    id: string
}

@EntityRepository(Product)
export default class ProductsRepository extends Repository<Product> {
    public async findByName(name: string): Promise<Product | undefined> {
        const product = this.findOne({ where: { name } });
        return product;
    }

    public async findAllByIds(products: IFindProducts[]): Promise<Product[]>{
        console.log("product - repo", products);
        const productsIds = products.map(product => product.id);
        console.log("product - repo", productsIds);
        const existsProducts = await this.find({
          where:{
            id: In(productsIds),
          }
        })
        return existsProducts;
      }

}