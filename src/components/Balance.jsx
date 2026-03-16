function Balance({transactions}) {

    // Calcul du total des revenus
    const totalIncome = transactions
        .filter((t) => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);

    // Calcul du total des dépenses
    const totalExpense = transactions
        .filter((t) => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);

    const balance = totalIncome - totalExpense;

    const formatAmount = (value) => {
        return new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR',
        }).format(value);
    };

    return (
        <div className="balance-grid">
            <div className="balance-item balance-income">
                <div className="label">
                    <i className="bi bi-arrow-up-circle me-1"></i>
                    Revenus
                </div>
                <div className="amount">{formatAmount(totalIncome)}</div>
            </div>

            <div className="balance-item balance-expense">
                <div className="label">
                    <i className="bi bi-arrow-down-circle me-1"></i>
                    Dépenses
                </div>
                <div className="amount">{formatAmount(totalExpense)}</div>
            </div>

            <div className="balance-item balance-total">
                <div className="label">
                    <i className="bi bi-wallet2 me-1"></i>
                    Solde
                </div>
                <div className="amount">{formatAmount(balance)}</div>
            </div>
        </div>
    );
}

export default Balance;
