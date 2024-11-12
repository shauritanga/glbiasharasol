-- DropIndex
DROP INDEX "users_phone_key";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "profession" DROP NOT NULL;
