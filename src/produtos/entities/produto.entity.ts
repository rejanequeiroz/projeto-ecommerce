import {Entity,PrimaryGeneratedColumn,Column,ManyToOne } from "typeorm";
import { Categoria } from "src/categoria/entities/categorias.entity";


@Entity("tb_produtos")
export class Produto {
@PrimaryGeneratedColumn()
id_pdt:number;
@Column({length:100})
nome:string;
@Column({type : "decimal", precision : 4 , scale : 1 })
preco:number;
@Column({type : "decimal", precision : 5 , scale : 1 })
peso:number;
@Column({length:100})
descricao:string;

@ManyToOne(() => Categoria ,(categoria)=> categoria.produto, { onDelete : "CASCADE"} )

categoria:Categoria

@ManyToOne(() => Produto ,(produto)=> usuario.produto, { onDelete : "CASCADE"} )

usuario:usuario

}