const request = require("supertest");
const app = require("../index");
describe("top headlines endpoint", function () {
  it("/news/top-headlines returns 200 status", async () => {
    const res = await request(app)
      .get(`/news/top-headlines?country=gb&apiKey=${process.env.NEWSAPI_URL}`)
      .set("Accept", "application/json");
    expect(res.statusCode).toEqual(200);
  });

  it("/news/top-headlines response body with ok status", async () => {
    const res = await request(app)
      .get(`/news/top-headlines?country=gb`)
      .set("Accept", "application/json");
    expect(res.body.status).toEqual("ok");
  });
});

describe("everything endpoint", function () {
  it("/everything returns 200 status", async () => {
    const res = await request(app)
      .get(`/news/everything?keyword=test`)
      .set("Accept", "application/json");
    expect(res.statusCode).toEqual(200);
  });

  it("/everything response body has articles ", async () => {
    const res = await request(app)
      .get(`/news/everything?keyword=test`)
      .set("Accept", "application/json");
    expect(res.body.articles.length).toBeGreaterThan(0);
  });
});
