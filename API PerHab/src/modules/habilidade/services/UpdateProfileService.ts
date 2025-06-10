import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";
import { compare, hash } from "bcryptjs";
import AppError from "src/shared/errors/AppError";

interface IRequest {
    user_id: string;
    name: string;
    email: string;
    password?: string;
    old_password?: string;
}

export default class UpdateProfileService{
    public async execute({user_id, name, email, password, old_password }: IRequest): Promise<User> {
        const userRepository = getCustomRepository(UsersRepository);
        const user = await userRepository.findById(user_id);
        if(!user){
            throw new AppError('User not Found')
        }
        const userUpdateEmail = await userRepository.findByEmail(email);
        if(userUpdateEmail){
            throw new Error('Email address already used');
        }

        if(password && !old_password){
            throw new AppError('Old password is required')
        }

        if(password && old_password){
            const checkOldPassword = await compare(old_password, user.password)
            if(!checkOldPassword){
                throw new AppError('não lembro')
            }
            const hashedpassword = await hash(password, 8);
        }
        
        user.name = name;
        user.email = email;
        await userRepository.save(user)
        return user;
    }
}

