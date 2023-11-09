// models/contaBancaria.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/dbseq');

class ContaBancaria extends Model {}

ContaBancaria.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    agencia: {
      type: DataTypes.STRING(20),
    },
    conta: {
      type: DataTypes.STRING(20),
    },
    instituicaoBancaria: {
      type: DataTypes.STRING(255),
    },
    iconeInstituicaoBancaria: {
      type: DataTypes.STRING(255),
    },
    taxa: {
      type: DataTypes.DECIMAL(5, 2),
    },
    tipoCobranca: {
      type: DataTypes.ENUM('Anual', 'Mensal'),
    },
  },
  {
    sequelize,
    modelName: 'ContaBancaria',
    tableName: 'contabancaria',
  }
);

module.exports = ContaBancaria;