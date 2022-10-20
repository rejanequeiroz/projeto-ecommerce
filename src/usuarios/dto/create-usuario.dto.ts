
import { IsNumber, IsString,} from "class-validator";
import { ProdutosController } from "src/produtos/produtos.controller";
import { OneToOne } from "typeorm";


export class CreateUsuarioDto {

    @IsNumber()
    id_user:number;
    @IsString()
    nome:string;
    @IsNumber()
    usuario:number;
    @IsNumber()
    email:number;
    @IsString()
    senha:string;
    @IsString()
    foto:string;

   


}
