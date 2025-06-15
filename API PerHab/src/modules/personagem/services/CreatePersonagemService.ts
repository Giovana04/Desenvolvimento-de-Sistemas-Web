import { getCustomRepository } from "typeorm";
import Personagem from "../typeorm/entities/Personagem";
import AppError from "src/shared/errors/AppError";
import PersonagemRepository from "../typeorm/repositories/PersonagemRepository";

interface IRequest{
    nome: string;
    anime: string;
}

export default class CreatePersonagemService{
    public async execute({nome, anime} : IRequest) : Promise<Personagem>{
        const personagensRepository = getCustomRepository(PersonagemRepository);
        const personagemExists = await personagensRepository.findByNameAnime(nome, anime);
        if(personagemExists){
            throw new AppError('Já existe um personagem com esse nome');
        }
        const personagem = personagensRepository.create({nome,anime});
        await personagensRepository.save(personagem);
        return personagem;
    }
}