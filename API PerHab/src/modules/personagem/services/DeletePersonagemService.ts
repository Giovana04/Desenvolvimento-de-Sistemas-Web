import { getCustomRepository } from "typeorm";
import AppError from "src/shared/errors/AppError";
import PersonagemRepository from "../typeorm/repositories/PersonagemRepository";

interface IRequest{
    id: string;
}

export default class DeletePersonagemService{
    public async execute({id} : IRequest) : Promise<void>{
        const personagemRepository = getCustomRepository(PersonagemRepository);
        const personagem = await personagemRepository.findOne(id);
        if(!personagem){
            throw new AppError('personagem não encontrado');
        }
        await personagemRepository.remove(personagem);
    }
}