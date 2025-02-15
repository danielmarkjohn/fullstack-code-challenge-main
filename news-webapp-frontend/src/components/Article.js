import PropTypes from "prop-types";
import newsImage from "../assets/images/news.jpeg";

function Article({ data }) {
  const articleSource = "Visit " + data.source.name;
  return (
    <div className="article" data-testid={data.url}>
      {data.urlToImage ? (
        <img
          className="article__image"
          src={data.urlToImage}
          alt={data.title}
        />
      ) : (
        <img className="article__image" src={newsImage} alt={data.title} />
      )}
      <h1 className="article__title" data-testid={data.title}>{data.title}</h1>
      <p className="article__desc" data-testid={data.description}>{data.description}</p>
      <span className="article__author" data-testid={data.author}>{data.author}</span> <br />
      <span className="article__published" data-testid={data.publishedAt}>
        {data.publishedAt.split("T")[0]}
      </span>
      <span className="article__source" data-testid={data.source.name}>{data.source.name}</span>
      <a href={data.url} target="_blank" rel="noreferrer" title={articleSource}>
        <div className="button button-hover">
          <span>Read Full</span>
        </div>
      </a>
    </div>
  );
}

Article.propTypes = {
  data: PropTypes.any,
};

export default Article;
