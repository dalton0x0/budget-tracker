import {useState} from 'react';
import Balance from './components/Balance';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import './index.css';

function App() {
    // State global contenant toutes les transactions
    const [transactions, setTransactions] = useState([]);

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

            {/* Liste des transactions */}
            <section className="tracker-card">
                <h2 className="section-title mb-3">
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
            ({transactions.length})
          </span>
                </h2>

                <TransactionList
                    transactions={transactions}
                    onDelete={handleDeleteTransaction}
                />
            </section>
        </div>
    );
}

export default App;
