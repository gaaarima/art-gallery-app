// Entry point for the Express backend
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Database setup
const db = new sqlite3.Database(path.join(__dirname, 'gallery.db'));

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS artists (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS artworks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    artist_id INTEGER,
    title TEXT,
    image_url TEXT,
    description TEXT,
    FOREIGN KEY (artist_id) REFERENCES artists(id)
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS shows (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    artist_id INTEGER,
    title TEXT,
    date TEXT,
    description TEXT,
    FOREIGN KEY (artist_id) REFERENCES artists(id)
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    show_id INTEGER,
    name TEXT,
    email TEXT,
    time_slot TEXT,
    FOREIGN KEY (show_id) REFERENCES shows(id)
  )`);
});

// Basic API routes (to be expanded)
app.get('/', (req, res) => {
  res.send('Art Gallery API is running');
});

const PORT = 50686;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
