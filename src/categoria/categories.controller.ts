import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode, ParseIntPipe } from '@nestjs/common';
import { CategoriasService } from './categories.service';
import { CreateCategoriaDto } from './dto/create-category.dto';
import { UpdateCategoriaDto } from './dto/update-category.dto';
import { Categoria } from './entities/categorias.entity';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Categoria[]>{
    return this.categoriasService.findAll()
  }

  @Get(':id_ct2')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id_ct2', ParseIntPipe) id_ct2: number): Promise<Categoria> {
    return this.categoriasService.findById(id_ct2);
  }

  @Get('/decoracao/:decoracao')
  @HttpCode(HttpStatus.OK)
  async findByName(@Param('decoracao') decoracao: string): Promise<Categoria[]> {
    return this.categoriasService.findByName(decoracao);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriasService.create(createCategoriaDto);
  }

  @Patch('/atualizar/:id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: number, @Body() updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriasService.update(id, updateCategoriaDto);
  }


  @Delete('/:id_ct2')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id_ct2', ParseIntPipe) id_ct2: number) {
    return this.categoriasService.delete(id_ct2);
  }
}
