function calculatePortfolioPerformance() {
    let initialInvestment: number = 10000;
    let currentValue: number = 12000;

    const profitOrLoss: number = currentValue - initialInvestment;

    const percentageChange: number = (profitOrLoss / initialInvestment) * 100;

    let performanceSummary: string;
    switch (true) {
        case percentageChange > 20:
            performanceSummary = `The portfolio has gained significantly with a profit of $${profitOrLoss}.`;
            break;
        default:
            performanceSummary = `The portfolio has performed poorly.`;
    }

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}

export default calculatePortfolioPerformance;