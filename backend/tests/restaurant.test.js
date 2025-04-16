const request = require('supertest');
const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

const filePath = './backend/restaurants.json';

app.get('/api/restaurants', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  res.json(data);
});

describe('GET /api/restaurants', () => {
  it('should return an array', async () => {
    const res = await request(app).get('/api/restaurants');
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.statusCode).toBe(200);
  });
});
