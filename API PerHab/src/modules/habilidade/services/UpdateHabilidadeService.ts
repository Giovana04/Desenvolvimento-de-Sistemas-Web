import { getCustomRepository } from "typeorm";
import AppError from "src/shared/errors/AppError";
import Habilidade from "../typeorm/entities/Habilidade";
import HabilidadeRepository from "../typeorm/repositories/HabilidadeRepository";

interface IRequest {
  id: string;
  nome: string;
  descricao: string;
  tipo: string;
  energia_custo: string;
  tempo_exe: string;
  personagem_id: string;
}

export default class UpdateHabilidadeService {
  public async execute({
    id,
    nome,
    descricao,
    tipo,
    energia_custo,
    tempo_exe,
    personagem_id,
  }: IRequest): Promise<Habilidade> {
    const habilidadeRepository = getCustomRepository(HabilidadeRepository);

    const habilidade = await habilidadeRepository.findOne(id);
    if (!habilidade) {
      throw new AppError("Habilidade não encontrada.");
    }

    const habilidadeComMesmoNome = await habilidadeRepository.findByName(nome);
    if (
      habilidadeComMesmoNome &&
      habilidadeComMesmoNome.id !== habilidade.id
    ) {
      throw new AppError("Já existe uma habilidade com esse nome.");
    }

    habilidade.nome = nome;
    habilidade.descricao = descricao;
    habilidade.tipo = tipo;
    habilidade.energia_custo = energia_custo;
    habilidade.tempo_exe = tempo_exe;
    habilidade.personagem_id = personagem_id;

    await habilidadeRepository.save(habilidade);

    return habilidade;
  }
}
