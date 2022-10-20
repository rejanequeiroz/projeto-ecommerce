import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ProdutosProviders } from './entities/produtos.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ProdutosController],
  providers: [
    ...ProdutosProviders,
        ProdutosService]
})
export class ProdutosModule {}
