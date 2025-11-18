require("dotenv").config();
const sql = require("mssql");

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

async function connectDB() {
  try {
    const pool = await new sql.ConnectionPool(dbConfig).connect();
    return pool;
  } catch (error) {
    return "Error: Connection DBD Failed" + error;
  }
}

module.exports = { sql, connectDB };
