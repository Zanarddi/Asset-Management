import { MigrationInterface, QueryRunner } from "typeorm"

export class Assets1689704064949 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE assets (
            id INTEGER PRIMARY KEY AUTO_INCREMENT,
            model TEXT,
            description TEXT,
            state TEXT NOT NULL,
            observation TEXT,
            type_id INTEGER NOT NULL,
            imeia TEXT,
            imeib TEXT,
            serial TEXT,
            express_code TEXT,
            asset_code TEXT,
            asset_code_new TEXT,
            it_asset_code TEXT,
            created_at DATETIME NOT NULL,
            updated_at DATETIME NOT NULL,
            FOREIGN KEY (type_id) REFERENCES types (id)
        );
          `);
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
          DROP TABLE assets;
          `);
      }

}
