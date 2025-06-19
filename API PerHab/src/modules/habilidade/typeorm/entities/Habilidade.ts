import Personagem from "@modules/personagem/typeorm/entities/Personagem";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";


@Entity("habilidade")
export default class Habilidade {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  tipo: string;

  @Column()
  energia_custo: string;

  @Column()
  tempo_exe: string;

  @Column()
  personagem_id: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
