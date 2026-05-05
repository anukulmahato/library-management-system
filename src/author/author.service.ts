import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.author.findMany({
      include: {
        books: true,
      },
    });
  }

  async create(createAuthorDto: CreateAuthorDto) {
    return await this.prisma.author.create({
      data: createAuthorDto,
    });
  }

  async findOne(id: string) {
    return await this.prisma.author.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto) {
    return await this.prisma.author.update({
      where: { id },
      data: updateAuthorDto,
    });
  }

  async delete(id: string) {
    return await this.prisma.author.delete({
      where: { id },
    });
  }
}
