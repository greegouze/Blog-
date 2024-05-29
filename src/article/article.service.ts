// Contient les méthodes d'intéraction avec la BDD
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Articles } from './articles.entity/articles.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Articles)
    private articlesRepository: Repository<Articles>,
  ) {}

  async getArticles(): Promise<Articles[]> {
    return await this.articlesRepository.find();
  }

  async getArticle(id: number): Promise<Articles[]> {
    return await this.articlesRepository.find({
      select: ['title', 'content', 'author', 'creationDate'],
      where: [{ id: id }],
    });
  }

  /**
   * Met à jour un article existant.
   *
   * @param id l'identifiant de l'article à mettre à jour
   * @param updateArticleDto Un objet contenant les nouvelles valeurs pour l'article.
   * @returns Une promesse qui sera résolu avec l'artcile mis à jours.
   */
  async updateArticle(
    id: number,
    updateArticleDto: Articles,
  ): Promise<Articles> {
    // Cherche l'article existant avec l'ID spécifié. Si aucun article n'est trouvé, une exception EntityNotFoundError est lancée.
    const existing = await this.articlesRepository.findOneByOrFail({ id });

    // Fusionne l'article existant avec les nouvelles valeurs fournies dans updateArticleDto,
    // puis sauvegarde l'article mis à jour dans la base de données.
    // La méthode save renvoie l'article mis à jour.
    return this.articlesRepository.save({
      ...existing,
      ...updateArticleDto,
    });
  }

  saveArticles(article: Articles): Promise<Articles> {
    return this.articlesRepository.save(article);
  }

  deleteArticle(id: number): void {
    this.articlesRepository.delete(id);
  }

  deleteAllArticles(): void {
    this.articlesRepository.delete({});
  }
}
