import { Module } from '@nestjs/common';
import { CategoriasService } from './categories.service';
import { CategoriasController } from './categories.controller';
import { categoriasProviders } from './categorias.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoriasController],
  providers: [
    ...categoriasProviders,
    CategoriasService,]
})
export class CategoriasModule {}
