-- AlterTable
ALTER TABLE `task` MODIFY `description` VARCHAR(1000) NOT NULL,
    MODIFY `startDate` VARCHAR(100) NULL,
    MODIFY `dueDate` VARCHAR(100) NULL;
