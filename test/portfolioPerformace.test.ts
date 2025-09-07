import calculatePortfolioPerformance from "../src/portfolio/portfolioPerformance";

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
