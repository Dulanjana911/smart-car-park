-- AddForeignKey
ALTER TABLE "Parking" ADD CONSTRAINT "Parking_rfid_fkey" FOREIGN KEY ("rfid") REFERENCES "User"("rfid") ON DELETE RESTRICT ON UPDATE CASCADE;
