import { useContext } from "react";
import { NewsContext } from "../contexts/NewsContext";
import Article from "./Article";
import Loader from "./Loader";
import SearchBar from "./SearchBar";
import { HOMEPAGE_HEADER,ARTICLE_NULL_ERROR_MESSAGE } from "../constants/constants";

function News() {
  const { data } = useContext(NewsContext);

  return (
    <div>
      <a href="/" style={{ textDecoration: "none" }}>
        <div className="head__text">{HOMEPAGE_HEADER}</div>
      </a>
      <SearchBar />
      {/* API response received */}
      {data ? (
        data.articles.length < 1 ? (
          <div className="article_not_found">{ARTICLE_NULL_ERROR_MESSAGE}</div>
        ) : (
          <div className="all__article">
            {data.articles.map((article) => (
              <Article data={article} key={article.url} />
            ))}
          </div>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default News;
