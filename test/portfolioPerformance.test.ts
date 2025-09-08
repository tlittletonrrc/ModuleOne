import { calculatePortfolioPerformance, findLargestHolding, asset, calculateAssetAllocation } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
    it("should return a profit when currentValue > initialInvestment", () => {
        const result: {
        initialInvestment: number;
        currentValue: number;
        profitOrLoss: number;
        percentageChange: number;
        performanceSummary: string;
    } = calculatePortfolioPerformance(20, 40);
        expect(result.profitOrLoss).toBe(20);
        expect(result.percentageChange).toBe(100);
        expect(result.performanceSummary).toBe("The portfolio has gained significantly with a profit of $20.");
    });
    
    it("should return no change when currentValue = initialInvestment", () => {
        const result: {
            initialInvestment: number;
            currentValue: number;
            profitOrLoss: number;
            percentageChange: number;
            performanceSummary: string;
        } = calculatePortfolioPerformance(10, 10);
        expect(result.profitOrLoss).toBe(0);
        expect(result.percentageChange).toBe(0);
        expect(result.performanceSummary).toBe("The portfolio has no changes.");
    });

    it("should return a loss when currentValue < initialInvestment", () => {
        const result: {
            initialInvestment: number;
            currentValue: number;
            profitOrLoss: number;
            percentageChange: number;
            performanceSummary: string;
        } = calculatePortfolioPerformance(10, 8);
        expect(result.profitOrLoss).toBe(-2);
        expect(result.percentageChange).toBe(-20);
        expect(result.performanceSummary).toBe("The portfolio has lost significantly with a loss of $-2.");
    });
});

describe("findLargestHolding", () => {
    it("should returns the largest asset", () => {
        const portfolio: asset[] = [
            { id: 1, name: "stocks", value: 20 },
            { id: 2, name: "bonds", value: 40 },
        ];
        const largest: asset = findLargestHolding(portfolio);
        expect(largest.value).toBe(40);
        expect(largest.name).toBe("bonds");
    });

    it("should return undefined if the array is empty", () => {
        const portfolio: asset[] = [];
        const largest: asset = findLargestHolding(portfolio);
        expect(largest).toBeUndefined();
    });

    it("should return one of the assets if there is a tie in values", () => {
        const portfolio: asset[] = [
            { id: 1, name: "a", value: 20 },
            { id: 2, name: "b", value: 20 },
        ];
        const largest: asset = findLargestHolding(portfolio);
        expect([20]).toContain(largest.value);
    });
});

describe("calculateAssetAllocation", () => {
    it("should return correct allocation for even distribution", () => {
        const portfolio: asset[] = [
            { id: 1, name: "stocks", value: 50 },
            { id: 2, name: "bonds", value: 50 },
        ];
        const allocation: { name: string; value: number; percentage: number }[] = calculateAssetAllocation(portfolio);
        expect(allocation.length).toBe(2);
        expect(allocation[0].percentage).toBe(50);
        expect(allocation[1].percentage).toBe(50);
    });

    it("should return correct allocation for uneven distribution", () => {
        const portfolio: asset[] = [
            { id: 1, name: "stocks", value: 30 },
            { id: 2, name: "bonds", value: 70 },
        ];
        const allocation: { name: string; value: number; percentage: number }[] = calculateAssetAllocation(portfolio);
        expect(allocation.length).toBe(2);
        expect(allocation[0].percentage).toBe(30);
        expect(allocation[1].percentage).toBe(70);
    });

    it("should return an empty array if portfolio is empty", () => {
        const portfolio: asset[] = [];
        const allocation: { name: string; value: number; percentage: number }[] = calculateAssetAllocation(portfolio);
        expect(allocation).toEqual([]);
    });
});