const express = require('express');
const { getTopHeadlines, getNewsByKeyword } = require('../controllers/newsController');
const router = express.Router();

//Routes
router.get('/top-headlines', getTopHeadlines);
router.get('/everything', getNewsByKeyword);

module.exports = router;