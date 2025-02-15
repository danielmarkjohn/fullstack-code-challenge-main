import { cleanup, render, screen } from "@testing-library/react";
import Article from "../Article";
import newsImage from "../../assets/images/news.jpeg";

const fakeArticle = {
  source: {
    id: null,
    name: "Business Standard",
  },
  author: "author",
  title: "Test Article",
  description: "Test Description",
  url: "https://www.example.com",
  urlToImage: "https://media.com/1607583401-071.jpg",
  publishedAt: "2022-02-14T21:30:00Z",
  content: "Test content… [+2410 chars]",
};

const fakeArticleWithoutImageURL = {
  source: {
    id: null,
    name: "Business Standard",
  },
  author: "author",
  title: "Test Imageless Article",
  description: "Test Description",
  url: "https://www.example.com",
  urlToImage: null,
  publishedAt: "2022-02-14T21:30:00Z",
  content: "Test content… [+2410 chars]",
};
describe("Tests for article card", () => {
  beforeEach(async ()=>{
    render(<Article data={fakeArticle} key={fakeArticle.url} />);
  }
  );
  afterEach(async ()=>{
    cleanup()
  }
  );
  it("Article has title", async () => {
    const articleCard = screen.getByTestId(fakeArticle.title);
    expect(articleCard).toBeInTheDocument();
    expect(articleCard).toHaveTextContent(fakeArticle.title);
  });

  it("Article has description", async () => {
    const articleDescription = screen.getByTestId(fakeArticle.description);
    expect(articleDescription).toBeInTheDocument();
    expect(articleDescription).toHaveTextContent(fakeArticle.description);
  });

   it("Article has source", async () => {

    const articleDescription = screen.getByTestId(fakeArticle.source.name);
    expect(articleDescription).toBeInTheDocument();
    expect(articleDescription).toHaveTextContent(fakeArticle.source.name);
  });

  it("Article has link to visit the external website", async () => {
    expect(screen.getByText("Read Full").closest("a")).toHaveAttribute(
      "href",
      "https://www.example.com"
    );
  });

  it("Article with broken image link shows default image", async () => {
    cleanup();
    render(
      <Article
        data={fakeArticleWithoutImageURL}
        key={fakeArticleWithoutImageURL.url}
      />
    );
    expect(
      screen.getByAltText(fakeArticleWithoutImageURL.title)
    ).toHaveAttribute("src", newsImage);
  });
});
