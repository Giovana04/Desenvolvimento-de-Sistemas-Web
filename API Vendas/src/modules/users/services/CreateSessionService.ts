import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";
import { compare, hash } from "bcryptjs";
import AppError from "src/shared/errors/AppError";

interface IRequest {
    email: string;
    password: string;
}

export default class CreateSessionrService {
    public async execute({email, password }: IRequest): Promise<User> {
        const userRepository = getCustomRepository(UsersRepository);
        const user = await userRepository.findByEmail(email);
        if(!user){
            throw new AppError('Incorret email or password');
        }
        const confirmedPassword = await compare(password, user.password);
        if(!confirmedPassword){
            throw new AppError('Incorret email or password');
        }
        return user;
    }
}

