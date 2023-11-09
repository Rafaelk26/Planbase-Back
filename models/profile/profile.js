// models/profile.js
const pool = require('../../config/db.js');

async function getProfileById(id) {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query("SELECT * FROM usuario WHERE id = ?", [id]);
    return rows;
  } finally {
    connection.release();
  }
}

module.exports = {
    getProfileById
};
