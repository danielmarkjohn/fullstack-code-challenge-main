const axios = require('axios');

// Fetch top headlines
const fetchTopHeadlines = async (country) => {
  try {
    const response = await axios.get(`${process.env.NEWSAPI_URL}/top-headlines`, {
      params: { country },
      headers: {
        'X-Api-Key': process.env.API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Headers:', { 'X-Api-Key': process.env.API_KEY });
    throw new Error(`Failed to fetch top headlines: ${error.message}`);
  }
};

// Fetch news by keyword
const fetchNewsByKeyword = async (keyword, page = 1, pageSize = 100) => {
  try {
    const response = await axios.get(`${process.env.NEWSAPI_URL}/everything`, {
      params: { q: keyword, page, pageSize },
      headers: { 'X-Api-Key': process.env.API_KEY },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch news by keyword: ${error.message}`);
  }
};

module.exports = { fetchTopHeadlines, fetchNewsByKeyword };