import {
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';

export enum BookStatus {
  AVAILABLE = 'AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE',
}

export class CreateBookDto {
  @IsString()
  title!: string;

  @IsInt()
  @Min(0)
  totalCopies!: number;

  @IsInt()
  @Min(0)
  availableCopies!: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDateString()
  publishedAt?: string;

  @IsEnum(BookStatus)
  status!: BookStatus;

  @IsUUID()
  authorId!: string;

  @IsUUID()
  categoryId!: string;
}
