import {useState} from 'react';
import Balance from './components/Balance';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Filter from './components/Filter';
import './index.css';

function App() {
    // State global contenant toutes les transactions
    const [transactions, setTransactions] = useState([]);

    // State pour le filtre actif (tous, revenus, dépenses)
    const [filter, setFilter] = useState('all');

    const handleAddTransaction = (newTransaction) => {
        setTransactions((previous) => [newTransaction, ...previous]);
    };

    // Suppression d'une transaction par son identifiant
    const handleDeleteTransaction = (transactionId) => {
        setTransactions((previous) =>
            previous.filter((t) => t.id !== transactionId)
        );
        console.log(`Transaction supprimée (id: ${transactionId}).`);
    };

    // Application du filtre sur les transactions
    const filteredTransactions = transactions.filter((transaction) => {
        if (filter === 'all') return true;
        return transaction.type === filter;
    });

    // Tri des transactions filtrées par date décroissante
    const sortedTransactions = [...filteredTransactions].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    return (
        <div className="container py-4" style={{maxWidth: '900px'}}>
            <header className="app-header">
                <h1>
                    <i className="bi bi-piggy-bank me-2"></i>
                    Budget Tracker
                </h1>
                <p>Gérez vos revenus et dépenses en toute simplicité</p>
            </header>

            {/* Affichage du solde */}
            <section className="mb-4">
                <Balance transactions={transactions}/>
            </section>

            {/* Formulaire d'ajout */}
            <section className="mb-4">
                <TransactionForm onAddTransaction={handleAddTransaction}/>
            </section>

            {/* Liste des transactions avec filtre */}
            <section className="tracker-card">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
                    <h2 className="section-title mb-0">
                        <i className="bi bi-list-ul"></i>
                        Transactions
                        <span
                            className="ms-2"
                            style={{
                                fontSize: '0.8rem',
                                color: 'var(--text-muted)',
                                fontWeight: 400,
                            }}
                        >
              ({sortedTransactions.length})
            </span>
                    </h2>
                    <Filter currentFilter={filter} onFilterChange={setFilter}/>
                </div>

                <TransactionList
                    transactions={sortedTransactions}
                    onDelete={handleDeleteTransaction}
                />
            </section>
        </div>
    );
}

export default App;
