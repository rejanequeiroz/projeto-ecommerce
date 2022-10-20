
import { IsString,IsNumber } from "class-validator";

export class CreateCategoriaDto {

    @IsNumber()
    id_ct2:number;
    @IsString()
    decoracao:string;
    @IsString()
    moveis:string;
}