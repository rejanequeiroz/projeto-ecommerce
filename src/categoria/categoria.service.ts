import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriaService {
  private produtos: Categoria[] = []; 
  create(createCategoriaDto: CreateCategoriaDto) {
    const IdMaxAtual = this.produtos[this.produtos.length - 1]?.id_ct2||0;
    const id_ct2 = IdMaxAtual + 1;
    const categoria = {
      id_ct2,
      ...createCategoriaDto
    };
    this.produtos.push(categoria);
    return categoria;
  }

  findAll() {
    return this.produtos;
  }

  findOne(id_ct2: number) {
    const index = this.produtos.findIndex((categoria)=> categoria.id_ct2 === id_ct2);

    return this.produtos[index];
  }

  update(id_ct2: number, updateCategoriaDto: UpdateCategoriaDto) {
    const user = this.findOne(id_ct2);
    const newCategoria = {
      ...user,
      ...updateCategoriaDto
    }
    const index = this.produtos.findIndex((categoria) => categoria.id_ct2 === id_ct2);//achando item pelo ID
    this.produtos[index] = newCategoria;

    return newCategoria;
  }

  remove(id_ct2: number) {
    const index = this.produtos.findIndex((categoria) => categoria.id_ct2 === id_ct2);

    if(index === -1){
      throw new NotFoundException(`Usuário com ID ${id_ct2} não encontrado.`) //Exceção quando não for encontrado
    }
    this.produtos.splice(index, 1) //Remove o item pelo index

    return `This action removes a #${id_ct2} user`;;
  }
} 
