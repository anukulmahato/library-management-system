import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';

@Injectable()
export class AssignmentService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.assignment.findMany({
      include: {
        student: true,
        book: true,
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.assignment.findUnique({
      where: { id },
    });
  }

  async create(createAssignmentDto: CreateAssignmentDto) {
    return await this.prisma.assignment.create({
      data: createAssignmentDto,
    });
  }

  async update(id: string, updateAssignmentDto: UpdateAssignmentDto) {
    return await this.prisma.assignment.update({
      where: { id },
      data: updateAssignmentDto,
    });
  }

  async delete(id: string) {
    return await this.prisma.assignment.delete({
      where: { id },
    });
  }
}
