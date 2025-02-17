import React, { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import newsapi from "../services/newsapi";
import { TOP_HEADLINES_SUBDIRECTORY } from "../constants/constants";

export const NewsContext = createContext();

export function NewsContextProvider(props) {
  const [data, setData] = useState();

  useEffect(() => {
    newsapi
      .get(TOP_HEADLINES_SUBDIRECTORY, {
        params: {
          country: "us",
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <NewsContext.Provider value={{ data, setData }}>
      {props.children}
    </NewsContext.Provider>
  );
}

NewsContextProvider.propTypes = {
  children : PropTypes.any
};