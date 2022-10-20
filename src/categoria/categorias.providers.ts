import { DataSource } from 'typeorm';
import { Categoria } from './entities/categorias.entity';

export const categoriasProviders = [
  {
    provide: 'CATEGORIAS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Categoria),
    inject: ['DATA_SOURCE'],
  },
];