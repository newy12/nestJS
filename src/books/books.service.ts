
import { UpdateBookDto } from './dto/update-book.dto';
import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from './entities/book.entity';
import { Repository } from 'typeorm';
import { throwIfEmpty } from 'rxjs';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookEntity)
    private bookEntityRepository: Repository<BookEntity>,
  ) {}
  create(createBookDto: CreateBookDto) {
    this.bookEntityRepository.save(createBookDto).then(() => throwIfEmpty());
    return 'This action adds a new book';
  }

  findAll() {
    return this.bookEntityRepository.find();
  }

  findOne(id: number) {
    return this.bookEntityRepository.findOneBy({ id });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.bookEntityRepository.update(id, updateBookDto);
  }
  remove(id: number) {
    return this.bookEntityRepository.delete(id);
  }
}
