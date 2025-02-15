const { fetchTopHeadlines, fetchNewsByKeyword } = require('../services/newsService');

const getTopHeadlines = async (req, res) => {
  try {
    const { country } = req.query;
    if (!country) {
      return res.status(400).json({ error: 'Country is required' });
    }
    const data = await fetchTopHeadlines(country);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getNewsByKeyword = async (req, res) => {
  try {
    const { keyword, page = 1, pageSize = 100 } = req.query;
    if (!keyword) {
      return res.status(400).json({ error: 'Keyword is required' });
    }
    const data = await fetchNewsByKeyword(keyword, page, pageSize);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getTopHeadlines, getNewsByKeyword };