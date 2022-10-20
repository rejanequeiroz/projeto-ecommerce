import { Produto } from "src/produtos/entities/produto.entity";
import {Entity,PrimaryGeneratedColumn,Column,OneToMany } from "typeorm";

@Entity(({name:"tb_categorias"}))
export class Categoria {
    @PrimaryGeneratedColumn()
    id_ct2:number;
    @Column({length:100})
    decoracao:string;
    @Column({length:100})
    moveis:string;

    @OneToMany(() => Produto ,(produto)=> produto.categoria, { onDelete : "CASCADE"} )


   produto:Produto


}
