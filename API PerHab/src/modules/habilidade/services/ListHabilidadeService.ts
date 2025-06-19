import { getCustomRepository } from "typeorm";
import HabilidadeRepository from "../typeorm/repositories/HabilidadeRepository";
import Habilidade from "../typeorm/entities/Habilidade";

export default class ListHabilidadeervice{
  public async execute(tipo?: string): Promise<Habilidade[]> {
    const habilidadeRepository = getCustomRepository(HabilidadeRepository);
    const habilidade = await habilidadeRepository.find();
        
    if (tipo) {
      return await habilidadeRepository.findByType(tipo);
    }

    return habilidade;
  }
}
