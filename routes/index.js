const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json('Simple Mail Delivery'));

module.exports = router;