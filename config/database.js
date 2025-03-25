const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
//   max: 10, // Pool max connections
//   idleTimeoutMillis: 30000
});

pool.on('error', (err) => {
  console.error('Database pool error:', err);
  process.exit(-1);
});

module.exports = pool;