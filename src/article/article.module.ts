// Gestion des articles
import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Articles } from './articles.entity/articles.entity';

@Module({
  providers: [ArticleService],
  controllers: [ArticleController],
  imports: [TypeOrmModule.forFeature([Articles])],
})
export class ArticleModule {}
