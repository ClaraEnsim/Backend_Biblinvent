const request = require('supertest');
const express = require('express');
const { Pool } = require('pg');

// Mock de dotenv
require('dotenv').config({ path: '.env.test' });

const app = express();
app.use(express.json());

// Connexion avec la base de test
const pool = new Pool({
    host: 'localhost',
    user: "user",
    password: "password",
    database: "maisons_edition"
});

app.get('/maisons', async (req, res) => {
  const { type, theme, public: publicCible } = req.query;

  try {
    const result = await pool.query(
      `
      SELECT * FROM maisons_edition
      WHERE $1 = ANY(type_livre)
        AND $2 = ANY(themes)
        AND $3 = ANY(public_cible)
    `,
      [type, theme, publicCible]
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur serveur');
  }
});

afterAll(async () => {
  await pool.end(); // Ferme la connexion après les tests
});

describe('GET /maisons', () => {
  test('Doit retourner les maisons d’édition correspondant aux critères', async () => {
    const response = await request(app)
      .get('/maisons')
      .query({
        type: 'Roman',
        theme: 'Romance',
        public: 'Adulte',
      });

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    // Tu peux aussi tester s’il y a au moins un résultat, par exemple :
    // expect(response.body.length).toBeGreaterThan(0);
  });

  test('Doit retourner un tableau vide si aucun résultat', async () => {
    const response = await request(app)
      .get('/maisons')
      .query({
        type: 'Science-fiction',
        theme: 'Robots',
        public: 'Bébés',
      });

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(0);
  });
});
