const express = require('express');
const { searchPerson }= require('../controllers/search');

const router = express.Router();

router.get('/search', searchPerson);

module.exports = router;