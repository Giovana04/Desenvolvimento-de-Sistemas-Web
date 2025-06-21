import { Entity, EntityRepository, In, Repository } from "typeorm";
import Habilidade from "../entities/Habilidade";

interface IFindHabilidade {
  id: string
  tipo: string
}

@EntityRepository(Habilidade)
export default class HabilidadeRepository extends Repository<Habilidade> {
  public async findByName(nome: string): Promise<Habilidade | undefined> {
    const habilidade = this.findOne({ where: { nome } });
    return habilidade;
  }

  public async findByType(tipo: string): Promise<Habilidade[]> {
    const habilidades = await this.find({
      where: { tipo },
    });

    return habilidades;
  }

  public async findAllByIds(habilidade: IFindHabilidade[]): Promise<Habilidade[]> {
    console.log("habilidade - repo", habilidade);
    const habilidadeIds = habilidade.map(habilidade => habilidade.id);
    console.log("habilidade - repo", habilidadeIds);
    const existshabilidade = await this.find({
      where: {
        id: In(habilidadeIds),
      }
    })
    return existshabilidade;
  }

  findByPersonagemId(personagemId: string) {
    return this.find({ where: { personagem: { id: personagemId } }, relations: ['personagem'] });
  }

  findHabilidadeWithPersonagem(id: string) {
    return this.findOne({ where: { id }, relations: ['personagem'] });
  }

}