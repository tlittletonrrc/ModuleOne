import { calculatePortfolioPerformance, findLargestHolding, asset } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
    it("should return a profit when currentValue > initialInvestment", () => {
        const result = calculatePortfolioPerformance(20, 40);
        expect(result.profitOrLoss).toBe(20);
        expect(result.percentageChange).toBe(100);
        expect(result.performanceSummary).toBe("The portfolio has gained significantly with a profit of $20.");
    });
    
    it("should return no change when currentValue = initialInvestment", () => {
        const result = calculatePortfolioPerformance(10, 10);
        expect(result.profitOrLoss).toBe(0);
        expect(result.percentageChange).toBe(0);
        expect(result.performanceSummary).toBe("The portfolio has no changes.");
    });

    it("should return a loss when currentValue < initialInvestment", () => {
        const result = calculatePortfolioPerformance(10, 8);
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
        const largest = findLargestHolding(portfolio);
        expect(largest.value).toBe(40);
        expect(largest.name).toBe("bonds");
    });

    it("should return undefined if the array is empty", () => {
        const portfolio: asset[] = [];
        const largest = findLargestHolding(portfolio);
        expect(largest).toBeUndefined();
    });

    it("should return one of the assets if there is a tie in values", () => {
        const portfolio: asset[] = [
            { id: 1, name: "a", value: 20 },
            { id: 2, name: "b", value: 20 },
        ];
        const largest = findLargestHolding(portfolio);
        expect([20]).toContain(largest.value);
    });
});