// Contient les méthodes correspondant aux routes de l'api /articles
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { Articles } from './articles.entity/articles.entity';

@Controller('article')
export class ArticleController {
  constructor(private service: ArticleService) {}

  @Get()
  getAllArticles() {
    return this.service.getArticles();
  }

  // J'utilise cette méthode lorsque j'ai besoin de récupérer avec
  //un autre params exemple : params.title,
  //Méthode de la wild mais pour notre cas moins précise

  //   @Get(':id')
  //   getArticle(@Param('id') params) {
  //     return this.service.getArticle(params.id);
  //   }

  @Get(':id')
  getArticle(@Param('id') id: string) {
    return this.service.getArticle(+id);
  }

  @Post()
  create(@Body() article: Articles) {
    return this.service.saveArticles(article);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: Articles) {
    return this.service.updateArticle(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.deleteArticle(+id);
  }

  @Delete()
  deleteAll() {
    return this.service.deleteAllArticles();
  }
}
