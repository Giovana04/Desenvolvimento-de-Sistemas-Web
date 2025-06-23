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

  // Uma Habilidade pertence a 1 Personagem
  @ManyToOne(() => Personagem, personagem => personagem.habilidade)
  @JoinColumn({ name: 'personagem_id' }) // Isso cria a coluna 'personagem_id' na tabela 'habilidades'
  personagem!: Personagem; // O objeto Personagem ao qual esta habilidade pertence

  @Column({ type: 'uuid' }) // Campo para armazenar o ID do personagem
  personagem_id!: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
