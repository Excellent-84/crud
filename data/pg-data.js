require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
});

pool.query(
  `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    age INTEGER NOT NULL
  )`,
  (err, result) => {
    if (err) {
      console.error('Error creating table: ', err);
    } else {
      console.log('Table users is available!');
    }
  }
);

module.exports = {

  async addUser(user) {
    try {
      const result = await pool.query(
        'INSERT INTO users (name, age) VALUES ($1, $2) RETURNING id',
        [user.name, user.age]
      );
      const lastId = result.rows[0].id
      return { id: lastId, ...user };
    } catch (err) {
      throw err;
    }
  },

  async getUsers() {
    try {
      const users = await pool.query('SELECT * FROM users ORDER BY id');
      return users.rows;
    } catch (err) {
      throw err;
    }
  },

  async getUserById(id) {
    try {
      const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
      return user.rows[0];
    } catch (err) {
      throw err;
    }
  },

  async updateUser(id, updateData) {
    try {
      const originalUser = await this.getUserById(id);
      if (!originalUser) {
        return null;
      }
      const user = await pool.query(
        'UPDATE users SET name = $1, age = $2 WHERE id = $3 RETURNING *',
        [updateData.name, updateData.age, id]
      );
      if (originalUser.name === user.rows[0].name &&
        originalUser.age === user.rows[0].age) {
        return null;
      }
      return this.getUserById(id);
    } catch (err) {
      throw err;
    }
  },

  async deleteUser(id) {
    try {
      const user = await pool.query('DELETE FROM users WHERE id = $1', [id]);
      return user.rowCount > 0;
    } catch (err) {
      throw err;
    }
  }
};
