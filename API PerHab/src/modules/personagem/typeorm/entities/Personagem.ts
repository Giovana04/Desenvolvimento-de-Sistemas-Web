import Habilidade from "../../../habilidade/typeorm/entities/Habilidade";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('personagem')
export default class Personagem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    anime: string;

    @Column()
    arma: string;

    @Column()
    img: string;

    @Column()
    vies: string;

    @OneToMany(() => Habilidade, habilidades => habilidades.personagem_id)
    habilidades!: Habilidade[];

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;
}