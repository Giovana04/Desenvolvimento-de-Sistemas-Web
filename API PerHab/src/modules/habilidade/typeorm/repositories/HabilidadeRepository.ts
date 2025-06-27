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
  const habilidade = await this.find({
    where: { tipo },
  });

  console.log("busca tipo:", habilidade);

  return habilidade;
}


  public async findAllByIds(habilidade: IFindHabilidade[]): Promise<Habilidade[]> {
    const habilidadeIds = habilidade.map(habilidade => habilidade.id);
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