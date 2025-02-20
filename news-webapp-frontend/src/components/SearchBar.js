import React, { useState, useContext } from "react";
import { NewsContext } from "../contexts/NewsContext";
import newsapi from "../services/newsapi";
import {
  KEYWORD_SEARCH_SUBDIRECTORY,
  DEFAULT_UK_TOP_HEADLINES_MESSAGE,
} from "../constants/constants";
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  Paper,
  Container,
} from "@mui/material";

function SearchBar() {
  const [heading, setHeading] = useState(DEFAULT_UK_TOP_HEADLINES_MESSAGE);
  const [inputError, setInputError] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { setData, data } = useContext(NewsContext);

  // Search by keyword
  const searchKeyword = async () => {
    if (!searchText.trim()) {
      setInputError("Please enter a search term");
      return;
    }
    try {
      setHeading(`Search results for: ${searchText}`);
      const response = await newsapi.get(`${KEYWORD_SEARCH_SUBDIRECTORY}`, {
        params: {
          keyword: searchText,
          page: currentPage,
          pageSize: 100,
        },
      });
      setData(response.data);
      setInputError(""); // Clear any previous errors
    } catch (error) {
      setInputError("Failed to fetch articles. Please try again.");
      console.error("Search error:", error);
    }
  };

  // Handle pagination
  const handleNextPage = () => {
    if (data && data.articles.length === 100) {
      setCurrentPage((prev) => prev + 1);
      searchKeyword();
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      searchKeyword();
    }
  };

  // Handle Enter key press
  const searchOnEnterKeyDown = (event) => {
    if (event.key === "Enter") {
      searchKeyword();
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setSearchText(e.target.value);
    setInputError("");
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        maxWidth: "1440px",
        margin: "auto",
        borderRadius: "16px",
        backgroundColor: "#fafafa",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Header */}
      <Container sx={{ textAlign: "center", marginBottom: "2rem" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#212121",
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: "1rem",
          }}
        >
          {heading}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#616161",
            fontSize: "1rem",
            lineHeight: "1.5",
          }}
        >
          Stay informed with the latest news and updates from around the world.
        </Typography>
      </Container>

      {/* Search Input and Button */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ marginBottom: "2rem" }}
      >
        <TextField
          fullWidth
          label="Search for articles"
          variant="outlined"
          value={searchText}
          onChange={handleChange}
          onKeyDown={searchOnEnterKeyDown}
          error={!!inputError}
          helperText={inputError}
          sx={{
            maxWidth: "600px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              backgroundColor: "#fff",
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={searchKeyword}
          data-testid="search-button"
          sx={{
            height: "56px",
            padding: "0 2rem",
            borderRadius: "8px",
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Search
        </Button>
      </Stack>
    </Paper>
  );
}

export default SearchBar;