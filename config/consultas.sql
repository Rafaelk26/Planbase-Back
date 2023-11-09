# contar registros
SELECT COUNT(*) AS registros FROM registro;

# contar entradas
SELECT COUNT(*) AS entradas FROM registro WHERE tipo = 'Entrada';

# contar saidas
SELECT COUNT(*) AS saidas FROM registro WHERE tipo = 'Saída';

# contar caixa
SELECT 
    (SELECT SUM(valor) FROM registro WHERE tipo = 'Entrada') -
    (SELECT SUM(valor) FROM registro WHERE tipo = 'Saida') AS caixa;
    
# gráfico de linhas das entradas e saídas
SELECT YEAR(data) AS ano, MONTH(data) AS mes, SUM(valor) AS somatorio
FROM registro
WHERE tipo = 'Entrada'
GROUP BY YEAR(data), MONTH(data)
ORDER BY ano, mes;

SELECT * FROM registro;
SELECT * FROM registro WHERE tipo = 'Entrada';
SELECT * FROM registro WHERE tipo = 'Saída';
