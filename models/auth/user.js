// models/UserModel.js
const mysql = require('mysql2/promise');

async function isUserAdmin(userId) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'planbasedb'
  });

  try {
    const [rows] = await connection.execute('SELECT administrador FROM usuario WHERE id = ?', [userId]);
    return rows.length > 0 && rows[0].administrador === 1;
  } catch (error) {
    console.error('Erro ao verificar se o usuário é administrador:', error);
    return false;
  } finally {
    connection.close();
  }
}

module.exports = {
  isUserAdmin
};
