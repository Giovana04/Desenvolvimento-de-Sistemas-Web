import { getCustomRepository, getRepository } from "typeorm";
import Personagem from "../typeorm/entities/Personagem";
import PersonagemRepository from "../typeorm/repositories/PersonagemRepository";

export default class ListarPersonagensService {
  public async execute(): Promise<Personagem[]> {
    const personagemRepository = getRepository(Personagem);

    const personagens = await personagemRepository.find({
      relations: ["habilidade"],
    });

    return personagens;
  }
}