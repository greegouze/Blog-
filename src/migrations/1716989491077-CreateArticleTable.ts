import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateArticleTable1716989491077 implements MigrationInterface {
  name = 'CreateArticleTable1716989491077';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "articles" ("id" SERIAL NOT NULL, "title" character varying(50) NOT NULL, "content" character varying(255) NOT NULL, "author" character varying(50) NOT NULL, "creationDate" date NOT NULL, CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "articles"`);
  }
}
