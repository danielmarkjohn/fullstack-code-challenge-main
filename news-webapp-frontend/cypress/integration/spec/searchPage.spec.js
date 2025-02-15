describe("Should render articles for searched keyword", () => {
  it("Render articles after search", () => {
    cy.visit("/");
    cy.intercept("GET", "**/news/top-headlines?country=gb", {
      fixture: "gbCountry.json",
    });
    cy.get(".search-input").type("queen", { force: true });
    cy.get(".search-button").click();
    cy.intercept("GET", "**/news/everything?keyword=queen", {
      fixture: "searchKeyword.json",
    });
    cy.get(".search-header").should("have.text", 'Articles for "queen"');
  });
  it("Show error for empty search input", () => {
    cy.get(".search-input").clear();
    cy.get(".search-button").click();
    cy.get(".input-error").should("have.text", "Enter search text!");
  });

  it("Show message if no articles are found for empty search input", () => {
    cy.get(".search-input").type("thisisajunktextzzzzz", { force: true });
    cy.get(".search-button").click();
    cy.intercept("GET", "**/news/everything?keyword=thisisajunktextzzzzz", {
      fixture: "emptyArticles.json",
    });

    cy.get(".article_not_found").should(
      "have.text",
      "Oops ! No articles found..."
    );
  });
});
