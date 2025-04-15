import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export default class Products{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
    
    @Column('decimal')
    price: number;
    
    @Column('int')
    quantity: number;
    
    @CreateDateColumn()
    create_at: Date;
    
    @CreateDateColumn()
    updated_at: Date;
}