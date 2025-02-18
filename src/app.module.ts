import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { PrismaService } from './prisma.service';
import { PrismaModule } from './prisma.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [BooksModule, PrismaModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
