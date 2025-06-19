import { getCustomRepository } from "typeorm";
import AppError from "src/shared/errors/AppError";
import HabilidadeRepository from "../typeorm/repositories/HabilidadeRepository";
import Habilidade from "../typeorm/entities/Habilidade";

interface IRequest{
    id: string;
}

export default class ShowhabilidadeService{
    public async execute({id} : IRequest) : Promise<Habilidade>{
        const habilidadeRepository = getCustomRepository(HabilidadeRepository);
        const habilidade = await habilidadeRepository.findOne(id);
        if(!habilidade){
            throw new AppError('habilidade não encontrado');
        }
        return habilidade;
    }
}