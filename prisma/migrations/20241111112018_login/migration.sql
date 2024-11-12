/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `district` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profession` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `village` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ward` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "business" TEXT,
ADD COLUMN     "district" TEXT NOT NULL,
ADD COLUMN     "education_level" TEXT,
ADD COLUMN     "institute" TEXT,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "profession" TEXT NOT NULL,
ADD COLUMN     "region" TEXT NOT NULL,
ADD COLUMN     "village" TEXT NOT NULL,
ADD COLUMN     "ward" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");
