import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/TypeORM.config';
import { BooksModule } from './books/books.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BooksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
