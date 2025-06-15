import { getCustomRepository } from "typeorm";
import Personagem from "../typeorm/entities/Personagem";
import PersonagemRepository from "../typeorm/repositories/PersonagemRepository";

export default class ListPersonagemervice{
    public async execute() : Promise<Personagem[]>{
        const personagemRepository = getCustomRepository(PersonagemRepository);
        const personagem = await personagemRepository.find();
        return personagem;
    }
}