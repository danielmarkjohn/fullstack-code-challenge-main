describe("Should render homepage", () => {
  it("Should load home page with articles", () => {
    cy.intercept("GET", "**/news/top-headlines?country=gb", {
      fixture: "gbCountry.json",
    });
    cy.visit("/");
    cy.get(".head__text").should("have.text", "DAILY NEWS");
    cy.get(".search-header").should("have.text", "Top Headlines from UK");
  });
});

describe("Should show loader ", () => {
  it("Should load home page with articles", () => {
    cy.intercept("GET", "**/news/top-headlines?country=gb", {
      statusCode: 404,
      body: "404 Not Found!",
      headers: {
        "x-not-found": "true",
      },
    });
    cy.visit("/");
    cy.get(".loader").should('be.visible');
  });
});
