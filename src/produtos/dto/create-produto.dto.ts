
import { IsNumber, IsString,} from "class-validator";


export class CreateProdutoDto {

    @IsNumber()
    id_pdt:number;
    @IsString()
    nome:string;
    @IsNumber()
    preco:number;
    @IsNumber()
    peso:number


}