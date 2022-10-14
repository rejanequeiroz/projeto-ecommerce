import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id_ct2: number;

    @Column({length: 100})
    moveis: string;

    @Column({length: 100})
    decoracao: string;
} 

