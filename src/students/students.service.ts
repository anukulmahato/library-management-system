import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}
  /**
   * Find All Student
   * @returns
   */
  async findAll() {
    return await this.prisma.student.findMany({
      include: {
        assignments: true,
      },
    });
  }

  /**
   * Find Single Student
   * @param id
   * @returns
   */
  async findOne(id: string) {
    return await this.prisma.student.findUnique({
      where: { id },
    });
  }

  /**
   * Create Student
   * @param createStudentDto
   * @returns
   */
  async create(createStudentDto: CreateStudentDto) {
    return await this.prisma.student.create({
      data: createStudentDto,
    });
  }

  /**
   * Update Student
   * @param id
   * @param updateStudentDto
   * @returns
   */
  async update(id: string, updateStudentDto: UpdateStudentDto) {
    return await this.prisma.student.update({
      where: { id },
      data: updateStudentDto,
    });
  }

  /**
   * Delete Single Student
   * @param id
   * @returns
   */
  async delete(id: string) {
    return await this.prisma.student.delete({
      where: { id },
    });
  }
}
