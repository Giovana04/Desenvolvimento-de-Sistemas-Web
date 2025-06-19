import { getCustomRepository } from "typeorm";
import AppError from "src/shared/errors/AppError";
import Habilidade from "../typeorm/entities/Habilidade";
import HabilidadeRepository from "../typeorm/repositories/HabilidadeRepository";

interface IRequest {
    nome: string;
    descricao: string;
    tipo: string;
    energia_custo: string;
    tempo_exe: string;
    personagem_id: string;
}

export default class CreateHabilidadeService {
  public async execute({
    nome,
    descricao,
    tipo,
    energia_custo,
    tempo_exe,
    personagem_id,
  }: IRequest): Promise<Habilidade> {
    const habilidadeRepository = getCustomRepository(HabilidadeRepository);

    const habilidadeExiste = await habilidadeRepository.findByName(nome);
    if (habilidadeExiste) {
      throw new AppError("Já existe uma habilidade com esse nome.");
    }

    const habilidade = habilidadeRepository.create({
      nome,
      descricao,
      tipo,
      energia_custo,
      tempo_exe,
      personagem_id,
    });

    await habilidadeRepository.save(habilidade);

    return habilidade;
  }
}