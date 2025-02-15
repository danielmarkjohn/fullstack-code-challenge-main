import React from "react";
import News from "../News";
import { render, screen } from "@testing-library/react";
import { NewsContext } from "../../contexts/NewsContext";

describe("<News />", () => {
  describe("when api data is fetched", () => {
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

    beforeEach(() => {
      render(
        <NewsContext.Provider value={fakeArticle}>
          <News />
        </NewsContext.Provider>
      );
    });

    it("Heading is present", () => {
      expect(screen.getByText("DAILY NEWS")).toBeInTheDocument();
    });
  });
});

describe("No articles are fetched", () => {
  const emptyArticle = {};

  beforeEach(() => {
    render(
      <NewsContext.Provider value={emptyArticle}>
        <News />
      </NewsContext.Provider>
    );
  });

  it("Loader is present", () => {
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
