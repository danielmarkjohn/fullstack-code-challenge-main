import { render, screen } from "@testing-library/react";
import SearchBar from "../SearchBar";
import { NewsContext } from "../../contexts/NewsContext";

it('Search button is present',async ()=>{
    const emptyArticle ={};
    render(
        <NewsContext.Provider value={emptyArticle}>
          <SearchBar />
        </NewsContext.Provider>
      );
    const searchButtonElement = screen.getByTestId("search-button");
    expect(searchButtonElement).toBeInTheDocument();
})