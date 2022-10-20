import { DataSource } from 'typeorm';
import { Produto } from './produto.entity';

export const ProdutosProviders = [
  {
    provide: 'PRODUTOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Produto),
    inject: ['DATA_SOURCE'],
  },
];