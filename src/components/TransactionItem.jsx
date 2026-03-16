function TransactionItem({transaction, onDelete}) {

    // Formatage du montant en euros
    const formattedAmount = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
    }).format(transaction.amount);

    // Formatage de la date en french
    const formattedDate = new Date(transaction.date).toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });

    const isIncome = transaction.type === 'income';

    return (
        <tr className={isIncome ? 'row-income' : 'row-expense'}>
            <td>{transaction.title}</td>
            <td>
        <span className={isIncome ? 'amount-income' : 'amount-expense'}>
          {isIncome ? '+' : '-'} {formattedAmount}
        </span>
            </td>
            <td>
        <span className={`type-badge ${isIncome ? 'type-badge-income' : 'type-badge-expense'}`}>
          {isIncome ? 'Revenu' : 'Dépense'}
        </span>
            </td>
            <td className="text-nowrap" style={{color: 'var(--text-secondary)'}}>
                {formattedDate}
            </td>
            <td className="text-end">
                <button
                    className="btn btn-tracker btn-tracker-danger"
                    onClick={() => onDelete(transaction.id)}
                    title="Supprimer cette transaction"
                >
                    <i className="bi bi-trash3"></i>
                </button>
            </td>
        </tr>
    );
}

export default TransactionItem;
