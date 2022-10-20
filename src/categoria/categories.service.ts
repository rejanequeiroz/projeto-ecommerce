import { Injectable, Inject } from '@nestjs/common';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { CreateCategoriaDto } from './dto/create-category.dto';
import { UpdateCategoriaDto } from './dto/update-category.dto';
import { Categoria } from './entities/categorias.entity';

@Injectable()
export class CategoriasService {

  constructor(
    @Inject('CATEGORIAS_REPOSITORY')
    private categoriasRepository: Repository<Categoria>
  ) {}

  async findAll(): Promise<Categoria[]> {
    return await this.categoriasRepository.find();
  }

  async findById(id_ct2: number): Promise<Categoria> {

    let categoria = await this.categoriasRepository.findOne({

      where: {
        id_ct2
      }

    });

    if(!categoria) {

      throw new HttpException('Categoria não encontrado!', HttpStatus.NOT_FOUND);

    }

    return categoria; 
  }

  async findByName(decoracao: string): Promise<Categoria[]> {

    return await this.categoriasRepository.find({

      where:{

        decoracao: ILike(`%${decoracao}%`)

      }
    });

  }

  async create(createCategoriaDto: CreateCategoriaDto): Promise<CreateCategoriaDto> {
    return this.categoriasRepository.save(createCategoriaDto);
  }

  async update(id_ct2: number, updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriasRepository.update(id_ct2, updateCategoriaDto);
  }

  async delete(id_ct2
    : number): Promise<DeleteResult> {

    let buscaCategoria = await this.findById(id_ct2
      );

    if (!buscaCategoria) {
        throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND)
    }
    return await this.categoriasRepository.delete(id_ct2
      );
  }
}
