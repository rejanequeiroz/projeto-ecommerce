import {Entity,PrimaryGeneratedColumn,Column,ManyToOne } from "typeorm";
import { Categoria } from "src/categoria/entities/categorias.entity";


@Entity("tb_usuario")
export class Usuario {
@PrimaryGeneratedColumn()
id_user:number;
@Column({length:100})
nome:string;
@Column({length : 100})
usuario:number;
@Column({length: 100 })
email:number;
@Column({length:100})
senha:string;

@ManyToOne(() => Categoria ,(categoria)=> categoria.produto, { onDelete : "CASCADE"} )

categoria:Categoria

}
