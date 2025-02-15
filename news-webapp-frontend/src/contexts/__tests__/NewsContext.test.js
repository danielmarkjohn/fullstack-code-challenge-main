import React from "react";
import { NewsContext } from "../NewsContext";
import { render, screen } from "@testing-library/react";

import News from "../../components/News";


describe("Context sets the data with api response", () => {
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
  it("Api call to fetch top headlines is happening", async () => {
    
    const wrapper = ({children})=>(
        <NewsContext.Provider value={fakeArticle}>
          {children}
        </NewsContext.Provider>
    )
    render(<News />, {wrapper})
    expect(screen.getByText("DAILY NEWS")).toBeInTheDocument();

  });
});
