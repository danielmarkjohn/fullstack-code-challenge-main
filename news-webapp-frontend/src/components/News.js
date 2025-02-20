import { useContext, useState } from "react";
import { NewsContext } from "../contexts/NewsContext";
import NewsCard from "./NewsCard";
import Loader from "./Loader";
import SearchBar from "./SearchBar";
import { HOMEPAGE_HEADER, ARTICLE_NULL_ERROR_MESSAGE } from "../constants/constants";
import {
  Box,
  Typography,
  Grid,
  Pagination,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";

function News() {
  const { data, setData, selectedCountry, setSelectedCountry } = useContext(NewsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // List of 10 countries (including India)
  const countries = [
    { code: "in", name: "India" },
    { code: "us", name: "United States" },
    { code: "gb", name: "United Kingdom" },
    { code: "au", name: "Australia" },
    { code: "ca", name: "Canada" },
    { code: "fr", name: "France" },
    { code: "de", name: "Germany" },
    { code: "jp", name: "Japan" },
    { code: "br", name: "Brazil" },
    { code: "za", name: "South Africa" },
  ];

  // Pagination logic
  const totalArticles = data ? data.articles.length : 0;
  const totalPages = Math.ceil(totalArticles / pageSize);

  // Get paginated articles
  const getPaginatedArticles = () => {
    if (!data) return [];
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.articles.slice(startIndex, endIndex);
  };

  // Handle country selection change
  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    setSelectedCountry(countryCode); // Update the selected country in the context
  };

  // Pagination handlers
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (event) => {
    const newSize = Number(event.target.value);
    setPageSize(newSize);
    setCurrentPage(1); // Reset to first page when changing page size
  };

  return (
    <Box className="news-container" sx={{ padding: "2rem", maxWidth: "1440px", margin: "auto" }}>
      {/* Header */}
      <Typography
        variant="h3"
        component="h1"
        sx={{
          textAlign: "center",
          marginBottom: "2rem",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        {HOMEPAGE_HEADER}
      </Typography>

      {/* Search Bar */}
      <Box sx={{ marginBottom: "2rem" }}>
        <SearchBar />
      </Box>

      {/* Country Selector and Pagination Controls */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ marginBottom: "2rem" }}
      >
        {/* Country Selector */}
        <Select
          value={selectedCountry}
          onChange={handleCountryChange}
          sx={{ width: "200px" }}
        >
          {countries.map((country) => (
            <MenuItem key={country.code} value={country.code}>
              {country.name}
            </MenuItem>
          ))}
        </Select>

        {/* Pagination Controls */}
        {data && (
          <>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
            <Select
              value={pageSize}
              onChange={handlePageSizeChange}
              sx={{ width: "150px" }}
            >
              <MenuItem value={5}>5 per page</MenuItem>
              <MenuItem value={10}>10 per page</MenuItem>
              <MenuItem value={15}>15 per page</MenuItem>
            </Select>
          </>
        )}
      </Stack>

      {/* API response received */}
      {data ? (
        data.articles.length < 1 ? (
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              color: "#ff4d4d",
              marginTop: "2rem",
            }}
          >
            {ARTICLE_NULL_ERROR_MESSAGE}
          </Typography>
        ) : (
          <>
            {/* Articles Grid */}
            <Grid container spacing={4}>
              {getPaginatedArticles().map((article) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={article.url}>
                  <NewsCard data={article} />
                </Grid>
              ))}
            </Grid>
          </>
        )
      ) : (
        <Loader />
      )}
    </Box>
  );
}

export default News;