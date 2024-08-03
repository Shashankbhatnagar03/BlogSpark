/*
  Warnings:

  - You are about to drop the column `publsihed` on the `Blog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "publsihed",
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false;
