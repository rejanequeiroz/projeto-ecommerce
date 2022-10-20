
import { Injectable, Inject } from '@nestjs/common';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {

  constructor(
    @Inject('PRODUTOS_REPOSITORY')
    private produtosRepository: Repository<Produto>
  ) {}

  async findAll(): Promise<Produto[]> {
    return await this.produtosRepository.find();
  }

  async findById(id_pdt
    : number): Promise<Produto> {

    let produto = await this.produtosRepository.findOne({

      where: {
        id_pdt

      }

    });

    if(!produto) {

      throw new HttpException('Categoria não encontrado!', HttpStatus.NOT_FOUND);

    }

    return produto; 
  }

  async findByName(nome: string): Promise<Produto[]> {

    return await this.produtosRepository.find({

      where:{

        nome: ILike('%${nome}%')

      }
    });

  }

  async create(createCategoriaDto: CreateProdutoDto): Promise<CreateProdutoDto> {
    return this.produtosRepository.save(createCategoriaDto);
  }

  async update(id_pdt
    : number, updateProdutoDto: UpdateProdutoDto) {
    return this.produtosRepository.update(id_pdt
      , updateProdutoDto);
  }

  async delete(id_pdt

    : number): Promise<DeleteResult> {

    let buscaCategoria = await this.findById(id_pdt

      );

    if (!buscaCategoria) {
        throw new HttpException('Produto não encontrada!', HttpStatus.NOT_FOUND)
    }
    return await this.produtosRepository.delete(id_pdt

      );
  }
}