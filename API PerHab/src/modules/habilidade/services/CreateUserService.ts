import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";
import { hash } from "bcryptjs";

interface IRequest {
    name: string;
    email: string;
    password: string;
}

export default class CreateUserService {
    public async execute({ name, email, password }: IRequest): Promise<User> {
        const userRepository = getCustomRepository(UsersRepository);
        const emailExists = await userRepository.findByEmail(email);
        if(emailExists){
            throw new Error('Email address already used');
        }
        const hashedpassword = await hash(password, 8);
        const user = userRepository.create({
            name,
            email,
            password: hashedpassword,
        });
        await userRepository.save(user)
        return user;
    }
}

