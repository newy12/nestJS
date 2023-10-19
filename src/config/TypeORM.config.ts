import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BookEntity } from '../books/entities/book.entity';
export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '3025',
  database: 'test',
  entities: [BookEntity],
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
};
