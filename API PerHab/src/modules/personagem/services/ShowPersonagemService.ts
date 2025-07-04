import { getCustomRepository } from "typeorm";

import AppError from "src/shared/errors/AppError";
import Personagem from "../typeorm/entities/Personagem";
import PersonagemRepository from "../typeorm/repositories/PersonagemRepository";

interface IRequest{
    id: string;
}

export default class ShowPersonagemService{
    public async execute({id} : IRequest) : Promise<Personagem>{
        const personagemRepository = getCustomRepository(PersonagemRepository);
    const personagem = await personagemRepository.findOne({
        relations: ["habilidade"],
        where: { id }
    });
    if(!personagem){
        throw new AppError('Personagem não encontrado');
    }
    
    return personagem;
    }
}