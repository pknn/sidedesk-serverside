import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTicket1623897739704 implements MigrationInterface {
    name = 'CreateTicket1623897739704'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ticket" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "reporterName" character varying NOT NULL, "reporterEmail" character varying NOT NULL, "status" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d9a0835407701eb86f874474b7c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ticket"`);
    }

}
