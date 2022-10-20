import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutosModule } from './produtos/produtos.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [CategoriaModule, ProdutosModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
