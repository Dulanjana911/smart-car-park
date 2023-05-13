/*
  Warnings:

  - A unique constraint covering the columns `[rfid]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Parking" (
    "pid" SERIAL NOT NULL,
    "rfid" TEXT NOT NULL,
    "action" TEXT NOT NULL,

    CONSTRAINT "Parking_pkey" PRIMARY KEY ("pid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_rfid_key" ON "User"("rfid");
