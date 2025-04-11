const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = 3000;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.get('/maisons', async (req, res) => {
  const { type, theme, public } = req.query;

  try {
    const result = await pool.query(`
      SELECT * FROM maisons
      WHERE type_livre ILIKE $1
        AND themes ILIKE $2
        AND public_cible ILIKE $3
    `, [`%${type}%`, `%${theme}%`, `%${public}%`]);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
