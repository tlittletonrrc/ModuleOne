function calculatePortfolioPerformance(initialInvestment: number, currentValue: number) {
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

interface asset {
    id: number;
    name: string;
    value: number;
}

function findLargestHolding(portfolio: asset[]): asset {
    let largest = portfolio[0];

    for (let i = 1; i < portfolio.length; i++) {
        if (portfolio[i].value > largest.value) {
            largest = portfolio[i];
        }
    }

    return largest;
}

export default calculatePortfolioPerformance; findLargestHolding;