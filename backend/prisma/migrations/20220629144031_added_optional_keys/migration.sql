-- AlterTable
ALTER TABLE `project` MODIFY `cover` VARCHAR(1000) NULL;

-- AlterTable
ALTER TABLE `task` MODIFY `startDate` DATETIME(3) NULL,
    MODIFY `dueDate` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `picture` VARCHAR(1000) NULL;
