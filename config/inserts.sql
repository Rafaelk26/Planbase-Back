-- Inserir dados na tabela `fornecedor`

INSERT INTO `planbasedb`.`fornecedor` (`nome`, `tipo`, `contato`, `valorContrato`)
VALUES
  ('Coca-Cola Company', 'Mensal', 'John Smith', 10000.00),
  ('Unilever Ltd.', 'Anual', 'Sarah Johnson', 15000.00),
  ('Microsoft Corporation', 'Mensal', 'Michael Brown', 8000.00),
  ('Procter & Gamble Co.', 'Anual', 'Emily Davis', 12000.00),
  ('Amazon.com Inc.', 'Mensal', 'Robert Wilson', 9000.00);

-- Inserir dados na tabela `contabancaria`

INSERT INTO `planbasedb`.`contabancaria` (`agencia`, `conta`, `instituicaoBancaria`, `iconeInstituicaoBancaria`, `taxa`, `tipoCobranca`)
VALUES
  ('1234', '56789-0', 'Banco Nacional', 'banco.png', 2.50, 'Mensal'),
  ('5678', '12345-6', 'Banco Internacional', 'bank.png', 3.00, 'Anual'),
  ('9876', '54321-0', 'Banco Regional', 'regional.png', 2.25, 'Mensal'),
  ('2222', '99999-1', 'Banco Nacional', 'banco.png', 2.75, 'Anual');

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
