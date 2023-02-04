const express = require('express');
const { Client } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

const Config = require('../config');

const router = express.Router();
router.use(cors()); // Enables CORS for fetch requests
router.use(bodyParser.json()); // Parse body for POST requests

router.get('/menuitems', (req, res) => {
  const client = new Client(Config.db);
  client.connect();
  // Items with NULL dates are constant and won't change
  // Some places e.g. SCR will change menu every day
  // Disregard repeated menu items on multiple dates, for now
  const { rows } = client.query('SELECT * FROM menuitems WHERE (date = 2023-02-05) IS NOT FALSE');
});

// Returns the menu items served by the specified restaurant
router.post('/restaurants', (req, res) => {
  const client = new Client(Config.db);
  client.connect();
  const { restaurant } = req.body;
  client.query('SELECT * FROM menuitems WHERE restaurant = $1', [restaurant], (err, response) => {
    if (err) throw err;
    const { rows } = response;
    res.end(JSON.stringify(rows));
  });
});

// router.post('/restaurants', (req, res) => {
//   const client = new Client(Config.db);
//   client.connect();
//   const menuItems = req.body;
//   menuItems.forEach(({
//     restaurant, fooddrink, item, price, glutenFree, vegetarian, vegan, tags, nutrients, date,
//   }) => {
//     // Tags and nutrients should be space-separated strings
//     console.log(tags);
//     console.log(nutrients);
//     client.query(
//       'INSERT INTO menuitems VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
//       [restaurant, fooddrink, item, price, glutenFree, vegetarian, vegan, tags, nutrients, date],
//     );
//   });
// });

router.post('/terra', (req, res) => {
  console.log(res.data);
});

module.exports = router;
