const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = 3000;

const pool = new Pool({
  host: 'localhost',
  user: "user",
  password: "password",
  database: "maisons_edition"
});

app.get('/maisons', async (req, res) => {
    const { type, theme, public: publicCible } = req.query;
  
    try {
      const result = await pool.query(`
        SELECT * FROM maisons_edition
        WHERE $1 = ANY(type_livre)
          AND $2 = ANY(themes)
          AND $3 = ANY(public_cible)
      `, [type, theme, publicCible]);
  
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send("Erreur serveur");
    }
  });  

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
