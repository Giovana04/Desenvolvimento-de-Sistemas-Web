import { getCustomRepository } from "typeorm";
import Order from "../typeorm/entities/Order";
import OrdersRepository from "../typeorm/repositories/OrdersRepository";
import AppError from "src/shared/errors/AppError";

interface Irequest {
    id: string
}

export default class ShowOrdertService {
    public async execute({ id }: Irequest): Promise<Order> {
        const ordersRepository = getCustomRepository(OrdersRepository);
        const order = await ordersRepository.findOne({ id });
        if (!order) {
            throw new AppError('order not found')
        }
        return order
    }

}