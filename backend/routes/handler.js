const express = require('express');
const { Client } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

const Config = require('../config');

const router = express.Router();
router.use(cors()); // Enables CORS for fetch requests
router.use(bodyParser.json()); // Parse body for POST requests

// Will using the same client work for all requests work?

router.get('/menuitems', (req, res) => {
  const client = new Client(Config.db);
  client.connect();
  // Items with NULL dates are constant and won't change
  // Some places e.g. SCR will change menu every day
  // Disregard repeated menu items on multiple dates, for now
  const { rows } = client.query('SELECT * FROM menuitems WHERE (date = 2023-02-05) IS NOT FALSE');
  console.log(rows);
});

router.get('/restaurants', (req, res) => {
  const client = new Client(Config.db);
  client.connect();
  const { rows } = client.query('SELECT * FROM restaurants');
  console.log(rows);
});

router.post('/', (req, res) => {
  const client = new Client(Config.db);
  client.connect();
  const menuItems = req.body;
  menuItems.forEach(({
    restaurant, fooddrink, item, price, glutenFree, vegetarian, vegan, tags, nutrients, date,
  }) => {
    // Tags and nutrients should be space-separated strings
    console.log(tags);
    console.log(nutrients);
    client.query(
      'INSERT INTO menuitems VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
      [restaurant, fooddrink, item, price, glutenFree, vegetarian, vegan, tags, nutrients, date],
    );
  });
});

module.exports = router;
