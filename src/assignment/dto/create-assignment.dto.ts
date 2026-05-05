import { IsString, IsUUID } from 'class-validator';

export class CreateAssignmentDto {
  @IsUUID()
  @IsString()
  studentId!: string;

  @IsUUID()
  @IsString()
  bookId!: string;
}
