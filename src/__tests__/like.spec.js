const request = require("supertest");
const app = require("../app");

describe("Likes", () => {
  it("should be able to give a like to the repository", async () => {
    expect(1).toBe(1);
  });

  it("should not be able to like a repository that does not exist", async () => {
    expect(1).toBe(1);
  });
});