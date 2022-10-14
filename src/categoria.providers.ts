import { DataSource } from 'typeorm';
import { Categoria } from './categoria/entities/categoria.entity';

export const usersProviders = [
  {
    provide: 'CATEGORIA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Categoria),
    inject: ['DATA_SOURCE'],
  },
];