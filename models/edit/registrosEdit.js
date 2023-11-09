// models/RegistroEdit.js
const { DataTypes, Model } = require('sequelize'); 
const sequelize = require('../../config/dbseq');

class Registro extends Model {}

Registro.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  contaBancaria_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fornecedor_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  titulo: {
    type: DataTypes.STRING,
  },
  operacional: {
    type: DataTypes.STRING,
  },
  tipo: {
    type: DataTypes.ENUM('Entrada', 'Saída'),
  },
  data: {
    type: DataTypes.DATE,
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2),
  },
  descricao: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.ENUM('Pendente', 'Efetuado'),
  },
  notaFiscal: {
    type: DataTypes.STRING(50),
  },
  qtdParcelas: {
    type: DataTypes.INTEGER,
  },
  tipoPagamento: {
    type: DataTypes.ENUM('Pix', 'Boleto', 'Débito', 'Crédito', 'Dinheiro'),
  },
}, {
  sequelize,
  modelName: 'Registro', // Nome do modelo
  tableName: 'registro', // Nome da tabela no banco de dados
});

module.exports = Registro;
