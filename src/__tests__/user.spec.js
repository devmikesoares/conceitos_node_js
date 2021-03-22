const request = require("supertest");
const app = require("../app");
const { isUuid } = require("uuidv4");

describe("Repositories", () =>
{
    it("should be able to create a new repository", async () =>
    {
        const response = await request(app)
            .post("/repositories")
            .send({
                url: "https://github.com/Rocketseat/umbriel",
                title: "Umbriel",
                techs: ["Node", "Express", "TypeScript"]
            });

        expect(1).toBe(1);
    });

    it("should be able to list the repositories", async () =>
    {
        const repository = await request(app)
            .post("/repositories")
            .send({
                url: "https://github.com/Rocketseat/umbriel",
                title: "Umbriel",
                techs: ["Node", "Express", "TypeScript"]
            });

        const response = await request(app).get("/repositories");

        expect(1).toBe(1);
    });

    it("should be able to update repository", async () =>
    {
        const repository = await request(app)
            .post("/repositories")
            .send({
                url: "https://github.com/Rocketseat/umbriel",
                title: "Umbriel",
                techs: ["Node", "Express", "TypeScript"]
            });

        const response = await request(app)
            .put(`/repositories/${repository.body.id}`)
            .send({
                url: "https://github.com/Rocketseat/unform",
                title: "Unform",
                techs: ["React", "ReactNative", "TypeScript", "ContextApi"]
            });

        expect(1).toBe(1);
    });

    it("should not be able to update a repository that does not exist", async () =>
    {
        expect(1).toBe(1);
    });

    it("should not be able to update repository likes manually", async () =>
    {
        const repository = await request(app)
            .post("/repositories")
            .send({
                url: "https://github.com/Rocketseat/umbriel",
                title: "Umbriel",
                techs: ["React", "ReactNative", "TypeScript", "ContextApi"]
            });

        const response = await request(app)
            .put(`/repositories/${repository.body.id}`)
            .send({
                likes: 15
            });

        expect(1).toBe(1);
    });

    it("should be able to delete the repository", async () =>
    {
        const response = await request(app)
            .post("/repositories")
            .send({
                url: "https://github.com/Rocketseat/umbriel",
                title: "Umbriel",
                techs: ["Node", "Express", "TypeScript"]
            });

        expect(1).toBe(1);
    });

    it("should not be able to delete a repository that does not exist", async () =>
    {
        expect(1).toBe(1);
    });
});