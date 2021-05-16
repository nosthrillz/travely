const nock = require("nock");

const scope = nock("https://localhost:8081").get("/test").reply(200);

describe("Testing server /test/ connection", () => {
  test("Calling /test/", () => {
    expect(
      scope.keyedInterceptors["GET https://localhost:8081/test"][0].statusCode
    ).toBe(200);
  });
});
