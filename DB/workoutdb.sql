-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema workoutdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `workoutdb` ;

-- -----------------------------------------------------
-- Schema workoutdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `workoutdb` DEFAULT CHARACTER SET utf8 ;
USE `workoutdb` ;

-- -----------------------------------------------------
-- Table `table1`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `table1` ;

CREATE TABLE IF NOT EXISTS `table1` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `exercise` VARCHAR(200) NOT NULL,
  `type` VARCHAR(200) NOT NULL,
  `duration` INT NULL,
  `weight` INT NULL,
  `place` VARCHAR(200) NULL,
  `num_reps` INT NULL,
  `num_sets` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS workout@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'workout'@'localhost' IDENTIFIED BY 'workout';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'workout'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `table1`
-- -----------------------------------------------------
START TRANSACTION;
USE `workoutdb`;
INSERT INTO `table1` (`id`, `exercise`, `type`, `duration`, `weight`, `place`, `num_reps`, `num_sets`) VALUES (1, 'walking', 'aerobic', 15, NULL, 'gym', NULL, NULL);
INSERT INTO `table1` (`id`, `exercise`, `type`, `duration`, `weight`, `place`, `num_reps`, `num_sets`) VALUES (2, 'bicep curls', 'weight training', NULL, 45, 'gym', 12, '2');
INSERT INTO `table1` (`id`, `exercise`, `type`, `duration`, `weight`, `place`, `num_reps`, `num_sets`) VALUES (3, 'lat pulls', 'weight training', NULL, 45, 'gym', 12, '2');
INSERT INTO `table1` (`id`, `exercise`, `type`, `duration`, `weight`, `place`, `num_reps`, `num_sets`) VALUES (4, 'push ups', 'bodyweight training', NULL, NULL, 'home', 25, '3');
INSERT INTO `table1` (`id`, `exercise`, `type`, `duration`, `weight`, `place`, `num_reps`, `num_sets`) VALUES (5, 'yoga', 'yoga', 60, NULL, 'yoga studio', NULL, NULL);

COMMIT;

