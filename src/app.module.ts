import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { StudentsModule } from './students/students.module';
import { BooksModule } from './books/books.module';
import { CategoryModule } from './category/category.module';
import { AuthorModule } from './author/author.module';
import { AssignmentModule } from './assignment/assignment.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    StudentsModule,
    BooksModule,
    CategoryModule,
    AuthorModule,
    AssignmentModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
