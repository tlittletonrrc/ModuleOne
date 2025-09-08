import express, { Express } from "express";
import { calculatePortfolioPerformance, findLargestHolding, calculateAssetAllocation, asset } from "./portfolio/portfolioPerformance";

// Initialize Express application
const app: Express = express();

// Define a route
app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

const portfolio: asset[] = [
    { id: 1, name: "stocks", value: 50 },
    { id: 2, name: "bonds", value: 100 },
];

app.get("/api/v1/portfolio/performance", (req, res) => {
    const initialInvestment: number = 10;
    const currentValue: number = 20;
    res.json(calculatePortfolioPerformance(initialInvestment, currentValue));
});

// Largest holding endpoint
app.get("/api/v1/portfolio/largest-holding", (req, res) => {
    res.json({ largest: findLargestHolding(portfolio) });
});

// Asset allocation endpoint
app.get("/api/v1/portfolio/allocation", (req, res) => {
    res.json({ allocation: calculateAssetAllocation(portfolio) });
});

export default app;