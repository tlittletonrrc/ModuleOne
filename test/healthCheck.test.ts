import request, { Response } from "supertest";
import app from "../src/app";

describe("GET /api/v1/health", () => {
    it("should return server health status", async () => {
        const response: Response = await request(app).get("/api/v1/health");
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("OK");
    });

    it("should return server health status of uptime, timestamp, version", async () => {
        const response: Response = await request(app).get("/api/v1/health");
        expect(response.body).toHaveProperty("uptime");
        expect(response.body).toHaveProperty("timestamp");
        expect(response.body).toHaveProperty("version");
    });
});

describe("GET /api/v1/portfolio/performance", () => {
    it("should return portfolio performance result", async () => {
        const response: Response = await request(app).get("/api/v1/portfolio/performance");
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("profitOrLoss", 10);
        expect(response.body).toHaveProperty("percentageChange", 100);
    });

    it("should return performance summary message", async () => {
        const response: Response = await request(app).get("/api/v1/portfolio/performance");
        expect(response.body.performanceSummary).toBe("The portfolio has gained significantly with a profit of $10.");
    });
});

describe("GET /api/v1/portfolio/largest-holding", () => {
    it("should return the largest asset", async () => {
        const response: Response = await request(app).get("/api/v1/portfolio/largest-holding");
        expect(response.status).toBe(200);
        expect(response.body.largest).toHaveProperty("name", "bonds");
        expect(response.body.largest).toHaveProperty("value", 100);
    });

    it("should return largest asset with correct id", async () => {
        const response: Response = await request(app).get("/api/v1/portfolio/largest-holding");
        expect(response.body.largest).toHaveProperty("id", 2);
    });
});

describe("GET /api/v1/portfolio/allocation", () => {
    it("should return allocation array with two assets", async () => {
        const response: Response = await request(app).get("/api/v1/portfolio/allocation");
        expect(response.status).toBe(200);
        expect(response.body.allocation).toHaveLength(2);
    });

    it("should return correct percentages for assets", async () => {
        const response: Response = await request(app).get("/api/v1/portfolio/allocation");
        expect(response.body.allocation[0].percentage).toBeCloseTo(33.33, 2);
        expect(response.body.allocation[1].percentage).toBeCloseTo(66.67, 2);
    });
});