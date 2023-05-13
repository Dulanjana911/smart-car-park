/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `fname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `v_model` on the `User` table. All the data in the column will be lost.
  - The `uid` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `uname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vmodel` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "fname",
DROP COLUMN "lname",
DROP COLUMN "v_model",
ADD COLUMN     "uname" TEXT NOT NULL,
ADD COLUMN     "vmodel" TEXT NOT NULL,
DROP COLUMN "uid",
ADD COLUMN     "uid" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("uid");
