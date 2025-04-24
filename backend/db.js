const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./zomato.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');

    db.run(`
      CREATE TABLE IF NOT EXISTS restaurants (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        location TEXT,
        cuisine TEXT,
        rating INTEGER
      )
    `);
  }
});

module.exports = db;
