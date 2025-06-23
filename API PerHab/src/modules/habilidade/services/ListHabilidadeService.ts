import { getCustomRepository } from "typeorm";
import HabilidadeRepository from "../typeorm/repositories/HabilidadeRepository";
import Habilidade from "../typeorm/entities/Habilidade";

export default class ListHabilidadeService{
  public async execute(tipo?: string): Promise<Habilidade[]> {
    const habilidadeRepository = getCustomRepository(HabilidadeRepository);

    if (tipo) {
      return await habilidadeRepository.findByType(tipo);
    }

    return await habilidadeRepository.find();
  }
}
