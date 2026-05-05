import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.book.findMany({
      include: {
        author: true,
        category: true,
        assignments: true,
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.book.findUnique({
      where: { id },
    });
  }

  async create(createBookDto: CreateBookDto) {
    return await this.prisma.book.create({
      data: {
        ...createBookDto,
        publishedAt: createBookDto.publishedAt
          ? new Date(createBookDto.publishedAt)
          : undefined,
      },
    });
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    return await this.prisma.book.update({
      where: { id },
      data: {
        ...updateBookDto,
        publishedAt: updateBookDto.publishedAt
          ? new Date(updateBookDto.publishedAt)
          : undefined,
      },
    });
  }

  async delete(id: string) {
    return await this.prisma.book.delete({
      where: { id },
    });
  }
}
