/*
  Warnings:

  - You are about to drop the column `authorId` on the `Reserve` table. All the data in the column will be lost.
  - Added the required column `author` to the `Reserve` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Reserve" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL
);
INSERT INTO "new_Reserve" ("id", "status", "title") SELECT "id", "status", "title" FROM "Reserve";
DROP TABLE "Reserve";
ALTER TABLE "new_Reserve" RENAME TO "Reserve";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
