import axios from "axios";


const newsapi = axios.create({
  baseURL:  process.env.REACT_APP_NEWS_ENDPOINT  
});

export default newsapi;