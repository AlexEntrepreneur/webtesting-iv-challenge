const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  res.json([
    { name: 'Luke'},
    { name: 'Obi-Wan'},
  ])
});

router.post('/', async (req, res) => {
  const newUser = req.body;
  res.json([
    { name: 'Luke'},
    { name: 'Obi-Wan'},
    newUser,
  ]);
});

module.exports = router;
