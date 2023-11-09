-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `planbasedb` DEFAULT CHARACTER SET utf8 ;
USE `planbasedb` ;

-- -----------------------------------------------------
-- Table `planbasedb`.`contabancaria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `planbasedb`.`contabancaria` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `agencia` VARCHAR(20) NULL DEFAULT NULL,
  `conta` VARCHAR(20) NULL DEFAULT NULL,
  `instituicaoBancaria` VARCHAR(255) NULL DEFAULT NULL,
  `iconeInstituicaoBancaria` VARCHAR(255) NULL DEFAULT NULL,
  `taxa` DECIMAL(5,2) NULL DEFAULT NULL,
  `tipoCobranca` ENUM('Anual', 'Mensal') NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `planbasedb`.`fornecedor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `planbasedb`.`fornecedor` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NULL DEFAULT NULL,
  `tipo` ENUM('Mensal', 'Anual') NULL DEFAULT NULL,
  `contato` VARCHAR(255) NULL DEFAULT NULL,
  `valorContrato` DECIMAL(10,2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `planbasedb`.`registro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `planbasedb`.`registro` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `contaBancaria_id` INT(11) NULL DEFAULT NULL,
  `fornecedor_id` INT(11) NULL DEFAULT NULL,
  `titulo` VARCHAR(255) NULL DEFAULT NULL,
  `operacional` VARCHAR(255) NULL DEFAULT NULL,
  `tipo` ENUM('Entrada', 'Saída') NULL DEFAULT NULL,
  `data` DATE NULL DEFAULT NULL,
  `valor` DECIMAL(10,2) NULL DEFAULT NULL,
  `descricao` TEXT NULL DEFAULT NULL,
  `status` ENUM('Pendente', 'Efetuado') NULL DEFAULT NULL,
  `notaFiscal` VARCHAR(50) NULL DEFAULT NULL,
  `qtdParcelas` INT(11) NULL DEFAULT NULL,
  `tipoPagamento` ENUM('Pix', 'Boleto', 'Débito', 'Crédito', 'Dinheiro') NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_registro_fornecedor_idx` (`fornecedor_id` ASC),
  INDEX `fk_registro_contaBancaria1_idx` (`contaBancaria_id` ASC),
  CONSTRAINT `fk_registro_contaBancaria1`
    FOREIGN KEY (`contaBancaria_id`)
    REFERENCES `planbasedb`.`contabancaria` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_registro_fornecedor`
    FOREIGN KEY (`fornecedor_id`)
    REFERENCES `planbasedb`.`fornecedor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `planbasedb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `planbasedb`.`usuario` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nomeExibicao` VARCHAR(45) NULL DEFAULT NULL,
  `nomeCompleto` VARCHAR(255) NULL DEFAULT NULL,
  `cargo` ENUM('Gestor', 'Administrador', 'Funcionário') NULL DEFAULT NULL,
  `foto` VARCHAR(255) NULL DEFAULT NULL,
  `bio` TEXT NULL DEFAULT NULL,
  `telefone` VARCHAR(20) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `senha` VARCHAR(100) NULL DEFAULT NULL,
  `nascimento` DATE NULL DEFAULT NULL,
  `cpf` VARCHAR(14) NULL DEFAULT NULL,
  `cidade` VARCHAR(80) NULL DEFAULT NULL,
  `uf` CHAR(2) NULL DEFAULT NULL,
  `pais` VARCHAR(50) NULL DEFAULT NULL,
  `dataInicio` DATE NULL DEFAULT NULL,
  `administrador` TINYINT(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
