/*
  Warnings:

  - Added the required column `feature` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Message_listingId_fkey` ON `message`;

-- AlterTable
ALTER TABLE `car` ADD COLUMN `feature` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_listingId_fkey` FOREIGN KEY (`listingId`) REFERENCES `Car`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
