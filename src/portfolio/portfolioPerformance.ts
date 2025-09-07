function calculatePortfolioPerformance() {
    let initialInvestment: number = 10000;
    let currentValue: number = 12000;

    const profitOrLoss: number = currentValue - initialInvestment;

    const percentageChange: number = (profitOrLoss / initialInvestment) * 100;

    let performanceSummary: string;
    switch (true) {
        case percentageChange >= 20:
            performanceSummary = `The portfolio has gained significantly with a profit of $${profitOrLoss}.`;
            break;
        case percentageChange >= 10 && percentageChange <= 19.99:
            performanceSummary = `The portfolio has gained moderately with a profit of $${profitOrLoss}.`;
            break;
        case percentageChange >= 0.1 && percentageChange <= 9.99:
            performanceSummary = `The portfolio has gained slightly with a profit of $${profitOrLoss}.`;
            break;
        case percentageChange == 0:
            performanceSummary = `The portfolio has no changes.`;
            break;
        case percentageChange <= -0.1 && percentageChange >= -9.99:
            performanceSummary = `The portfolio has lost slightly with a loss of $${profitOrLoss}.`;
            break;
        case percentageChange <= -10 && percentageChange > -20:
            performanceSummary = `The portfolio has lost moderately with a loss of $${profitOrLoss}.`;
            break;
        case percentageChange <= -20:
            performanceSummary = `The portfolio has lost significantly with a loss of $${profitOrLoss}.`;
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