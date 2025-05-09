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

// This is the code for database.
// In this section, I first tried to connect with MongoDB, but it didn’t work and i got so many errors and,
// I spent a lot of time trying to fix it, but it still didn’t work.
// Then I searched on Google for alternatives and found SQLite database and then,
// I set it up with help from YouTube tutorials.
