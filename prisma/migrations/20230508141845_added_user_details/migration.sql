/*
  Warnings:

  - Added the required column `fname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rfid` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sid` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `v_model` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "fname" TEXT NOT NULL,
ADD COLUMN     "lname" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "rfid" TEXT NOT NULL,
ADD COLUMN     "sid" TEXT NOT NULL,
ADD COLUMN     "v_model" TEXT NOT NULL;
