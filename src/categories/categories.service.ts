import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  // Create Category
  create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.categories.create({
      data: createCategoryDto,
    });
  }

  // Get all Categories
  findAll() {
    return this.prisma.categories.findMany();
  }

  // Get Category by ID
  findOne(id: string) {
    return this.prisma.categories.findUnique({
      where: { id },
    });
  }

  // Update Category by ID
  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.categories.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  // Remove Category by ID
  remove(id: string) {
    return this.prisma.categories.delete({
      where: { id },
    });
  }
}
