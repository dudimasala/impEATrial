const express = require('express');
const { Client } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

const Config = require('../config');

const router = express.Router();
router.use(cors()); // Enables CORS for fetch requests
router.use(bodyParser.json()); // Parse body for POST requests

// Returns all menu items on 5 Feb 2023
router.get('/menuitems', (req, res) => {
  const client = new Client(Config.db);
  client.connect();
  // Items with NULL dates are constant and won't change
  // Some places e.g. SCR will change menu every day
  // Disregard repeated menu items on multiple dates, for now
  client.query('SELECT * FROM menuitems WHERE (date = \'2023-02-05\') IS NOT FALSE', (err, response) => {
    if (err) throw err;
    const { rows } = response;
    res.send(rows);
  });
});

// router.get('/restaurants', (req, res) => {
//   const client = new Client(Config.db);
//   client.connect();
//   const { restaurant } = req.body;
//   client.query('SELECT * FROM menuitems', (err, response) => {
//     if (err) throw err;
//     const { rows } = response;
//     res.end(JSON.stringify(rows));
//   });
// });

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

router.post('/terra', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

module.exports = router;
