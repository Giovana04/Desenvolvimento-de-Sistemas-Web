import { getCustomRepository } from "typeorm";
import AppError from "src/shared/errors/AppError";
import HabilidadeRepository from "../typeorm/repositories/HabilidadeRepository";

interface IRequest{
    id: string;
}

export default class DeleteHabilidadeService{
    public async execute({id} : IRequest) : Promise<void>{
        const habilidadeRepository = getCustomRepository(HabilidadeRepository);
        const habilidade = await habilidadeRepository.findOne(id);
        if(!habilidade){
            throw new AppError('habilidade não encontrada');
        }
        await habilidadeRepository.remove(habilidade);
    }
}