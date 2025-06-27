// Example alternative if the folder is named 'personagens' or in a different location:
//import Personagem from "../../personagens/typeorm/entities/Personagem";
import Personagem from "../../../personagem/typeorm/entities/Personagem";
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

  @ManyToOne(() => Personagem, personagem => personagem.habilidade)
  @JoinColumn({ name: 'personagem_id' })
  personagem!: Personagem; 

  @Column({ type: 'uuid' })
  personagem_id!: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
