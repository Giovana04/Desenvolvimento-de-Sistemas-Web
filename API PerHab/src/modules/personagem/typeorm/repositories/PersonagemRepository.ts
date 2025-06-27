import { Entity, EntityRepository, In, Repository } from "typeorm";
import Personagem from "../entities/Personagem";

interface IFindPersonagens {
  id: string
}

@EntityRepository(Personagem)
export default class personagemRepository extends Repository<Personagem> {
  public async findByNameAnime(nome: string, anime: string): Promise<Personagem | undefined> {
    const personagem = this.findOne({ where: { nome, anime } });
    return personagem;
  }

  public async findAllByIds(personagem: IFindPersonagens[]): Promise<Personagem[]> {
    const personagensIds = personagem.map(personagem => personagem.id);
    const existspersonagem = await this.find({
      where: {
        id: In(personagensIds),
      }
    })
    return existspersonagem;
  }

  findPersonagemWithHabilidades(id: string) {
    return this.findOne({ where: { id }, relations: ['habilidades'] });
  }

}