import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import newsapi from "../services/newsapi";
import { TOP_HEADLINES_SUBDIRECTORY } from "../constants/constants";

export const NewsContext = createContext();

export function NewsContextProvider(props) {
  const [data, setData] = useState();
  const [selectedCountry, setSelectedCountry] = useState("us"); // Default to "us" (United States)

  // Fetch news based on the selected country
  useEffect(() => {
    newsapi
      .get(TOP_HEADLINES_SUBDIRECTORY, {
        params: {
          country: selectedCountry,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, [selectedCountry]); // Re-fetch when the selected country changes

  return (
    <NewsContext.Provider value={{ data, setData, selectedCountry, setSelectedCountry }}>
      {props.children}
    </NewsContext.Provider>
  );
}

NewsContextProvider.propTypes = {
  children: PropTypes.any,
};