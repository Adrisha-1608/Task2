const pool = require('../config/database');

class UserModel {
  static async initialize() {
    const client = await pool.connect();
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(100) UNIQUE NOT NULL,
          created_at TIMESTAMP DEFAULT NOW(),
          updated_at TIMESTAMP DEFAULT NOW()
        )
      `);
    } catch (error) {
      throw new Error(`Database initialization failed: ${error.message}`);
    } finally {
      client.release();
    }
  }

  static async create(userData) {
    const client = await pool.connect();
    try {
      const { name, email } = userData;
      const result = await client.query(
        'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
        [name, email]
      );
      return result.rows[0];
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  }

  static async findAll() {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM users');
      return result.rows;
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  }

  static async findById(id) {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM users WHERE id = $1', [id]);
      return result.rows[0];
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  }

  static async update(id, userData) {
    const client = await pool.connect();
    try {
      const { name, email } = userData;
      const result = await client.query(
        'UPDATE users SET name = $1, email = $2, updated_at = NOW() WHERE id = $3 RETURNING *',
        [name, email, id]
      );
      return result.rows[0];
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  }

  static async delete(id) {
    const client = await pool.connect();
    try {
      const result = await client.query('DELETE FROM users WHERE id = $1', [id]);
      return result.rowCount;
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  }
}

module.exports = UserModel;