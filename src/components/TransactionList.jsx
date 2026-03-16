import TransactionItem from './TransactionItem';

function TransactionList({transactions, onDelete}) {

    if (transactions.length === 0) {
        return (
            <div className="empty-state">
                <i className="bi bi-inbox"></i>
                <p>Aucune transaction à afficher.</p>
                <p className="mt-1" style={{fontSize: '0.82rem'}}>
                    Ajoutez votre première transaction ci-dessus.
                </p>
            </div>
        );
    }

    return (
        <div className="table-responsive">
            <table className="transaction-table">
                <thead>
                <tr>
                    <th>Titre</th>
                    <th>Montant</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th className="text-end">Action</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map((transaction) => (
                    <TransactionItem
                        key={transaction.id}
                        transaction={transaction}
                        onDelete={onDelete}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionList;
