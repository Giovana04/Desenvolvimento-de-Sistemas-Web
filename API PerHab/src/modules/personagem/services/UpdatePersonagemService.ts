import { getCustomRepository } from "typeorm";
import AppError from "src/shared/errors/AppError";
import Personagem from "../typeorm/entities/Personagem";
import PersonagemRepository from "../typeorm/repositories/PersonagemRepository";
interface IRequest{
    id: string;
    nome: string;
    anime: string;
    arma?: string;
    vies?: string;
    img?: string;
}
export default class UpdatePersonagemService{
    public async execute({id, nome, anime, arma, vies, img} : IRequest) : Promise<Personagem>{
        const personagemsRepository = getCustomRepository(PersonagemRepository);
        const personagem = await personagemsRepository.findOne(id);
        if(!personagem){
            throw new AppError('personagem não encontrado');
        }
        const personagemExists = await personagemsRepository.findByNameAnime(nome, anime);
        if(personagemExists && nome != personagemExists.nome && anime != personagemExists.anime){
            throw new AppError('Já existe um personagem com esse nome e anime');
        }
        personagem.nome = nome;
        personagem.anime = anime;
        if(arma){
            personagem.arma = arma;
        }
        if(vies){
            personagem.vies = vies;
        }
        if(img){
            personagem.img = img;
        }
        await personagemsRepository.save(personagem);
        return personagem;
    }
}