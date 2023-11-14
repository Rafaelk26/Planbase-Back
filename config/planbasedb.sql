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
  `codigoBancario` VARCHAR(255) NULL DEFAULT NULL,
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
    ON DELETE CASCADE
    ON UPDATE cascade,
  CONSTRAINT `fk_registro_fornecedor`
    FOREIGN KEY (`fornecedor_id`)
    REFERENCES `planbasedb`.`fornecedor` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
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



-- Inserir dados na tabela `fornecedor`

INSERT INTO `planbasedb`.`fornecedor` (`nome`, `tipo`, `contato`, `valorContrato`)
VALUES
  ('Coca-Cola Company', 'Mensal', 'John Smith', 10000.00),
  ('Unilever Ltd.', 'Anual', 'Sarah Johnson', 15000.00),
  ('Microsoft Corporation', 'Mensal', 'Michael Brown', 8000.00),
  ('Procter & Gamble Co.', 'Anual', 'Emily Davis', 12000.00),
  ('Amazon.com Inc.', 'Mensal', 'Robert Wilson', 9000.00);

-- Inserir dados na tabela `contabancaria`

INSERT INTO `planbasedb`.`contabancaria` (`agencia`, `conta`, `instituicaoBancaria`, `codigoBancario`, `taxa`, `tipoCobranca`)
VALUES
  ('1234', '56789-0', 'Banco da Amazônia S.A.', '003', 2.50, 'Mensal'),
  ('5678', '12345-6', 'Banco do Brasil S.A.', '001', 3.00, 'Anual'),
  ('9876', '54321-0', 'Banco Santander S.A', '033', 2.25, 'Mensal'),
  ('2222', '99999-1', 'Nu Financeira S.A.', '260', 2.75, 'Anual');

-- Inserir dados na tabela `registro`

INSERT INTO `planbasedb`.`registro` (
  `contaBancaria_id`,
  `fornecedor_id`,
  `titulo`,
  `operacional`,
  `tipo`,
  `data`,
  `valor`,
  `descricao`,
  `status`,
  `notaFiscal`,
  `qtdParcelas`,
  `tipoPagamento`
) VALUES
  (1, 1, 'Compra de suprimentos', 1, 'Saida', '2023-10-26', 500.00, 'Pagamento de suprimentos para estoque', 'Efetuado', 'NF12345', 1, 'Boleto'),
  (2, 2, 'Venda de produtos', 0, 'Entrada', '2023-10-25', 1200.00, 'Venda de produtos para cliente', 'Efetuado', 'NF54321', 1, 'Débito'),
  (3, 3, 'Manutenção de equipamentos', 1, 'Saida', '2023-10-24', 350.00, 'Manutenção de máquinas', 'Pendente', 'NF78901', 1, 'Pix'),
  (4, 4, 'Serviços de consultoria', 0, 'Entrada', '2023-10-23', 900.00, 'Serviços de consultoria em marketing', 'Efetuado', 'NF23456', 1, 'Crédito'),
  (1, 2, 'Venda de estoque', 1, 'Saida', '2023-10-22', 800.00, 'Venda de estoque antigo', 'Efetuado', 'NF65432', 1, 'Boleto'),
  (2, 3, 'Compra de material de escritório', 0, 'Entrada', '2023-10-21', 150.00, 'Compra de material de escritório', 'Efetuado', 'NF87654', 1, 'Débito'),
  (3, 4, 'Pagamento de aluguel', 1, 'Saida', '2023-10-20', 1000.00, 'Aluguel da sede da empresa', 'Pendente', 'NF10987', 1, 'Pix'),
  (4, 1, 'Venda de produtos', 0, 'Entrada', '2023-10-19', 1600.00, 'Venda de produtos para cliente', 'Pendente', 'NF34567', 1, 'Crédito'),
  (1, 3, 'Compra de matéria-prima', 1, 'Saida', '2023-10-18', 700.00, 'Compra de matéria-prima para produção', 'Efetuado', 'NF43210', 1, 'Boleto'),
  (2, 4, 'Serviços de TI', 0, 'Entrada', '2023-10-17', 750.00, 'Serviços de suporte técnico', 'Efetuado', 'NF76543', 1, 'Débito');

-- Inserir dados na tabela `usuario`

INSERT INTO `planbasedb`.`usuario` (
  `nomeExibicao`,
  `nomeCompleto`,
  `cargo`,
  `foto`,
  `bio`,
  `telefone`,
  `email`,
  `senha`,
  `nascimento`,
  `cpf`,
  `cidade`,
  `uf`,
  `pais`,
  `dataInicio`,
  `administrador`
) VALUES
  ('João Silva', 'João Manuel Silva', 'Gestor', 'joao.jpg', 'Sou o gestor da empresa.', '(123) 456-7890', 'joao@empresa.com', 'senha123', '1980-05-15', '123.456.789-01', 'São Paulo', 'SP', 'Brasil', '2022-01-10', 1),
  ('Ana Sousa', 'Ana Maria Sousa', 'Administrador', 'ana.jpg', 'Administrador de sistemas.', '(987) 654-3210', 'ana@empresa.com', 'senha456', '1990-03-20', '987.654.321-02', 'Rio de Janeiro', 'RJ', 'Brasil', '2021-11-05', 1),
  ('Pedro Rocha', 'Pedro Luiz Rocha', 'Funcionário', 'pedro.jpg', 'Funcionário de vendas.', '(555) 123-4567', 'pedro@empresa.com', 'senha789', '1995-09-08', '555.123.456-03', 'Belo Horizonte', 'MG', 'Brasil', '2023-03-15', 0);



SELECT * FROM usuario;
SELECT * FROM contabancaria;
SELECT * FROM fornecedor;
SELECT * FROM registro;
