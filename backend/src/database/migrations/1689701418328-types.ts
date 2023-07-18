import { MigrationInterface, QueryRunner } from "typeorm"

export class Types1689701418328 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE types (
      id INTEGER PRIMARY KEY AUTO_INCREMENT,
      name TEXT UNIQUE,
      created_at DATETIME NOT NULL,
      updated_at DATETIME NOT NULL
      );
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE types;
      `);
  }

}
