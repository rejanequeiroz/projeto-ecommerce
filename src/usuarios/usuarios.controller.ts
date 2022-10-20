import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode, ParseIntPipe } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';
import { Usuario } from './entities/usuario.entity';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Usuario[]>{
    return this.usuarioService.findAll()
  }

  @Get(':id_user')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id_pdt', ParseIntPipe) id_user: number): Promise<Usuario> {
    return this.usuarioService.findById(id_user);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  async findByName(@Param('nome') nome: string): Promise<Usuario[]> {
    return this.usuarioService.findByName(nome);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUsuarioDto: CreateProdutoDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Patch('/atualizar/:id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(id, updateUsuarioDto);
  }


  @Delete('/:id_user')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id_pdt', ParseIntPipe) id_user: number) {
    return this.usuarioService.delete(id_user);
  }
}
