import { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import './index.css';

function App() {
  // State global contenant toutes les transactions
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions((previous) => [newTransaction, ...previous]);
  };

  return (
    <div className="container py-4" style={{ maxWidth: '900px' }}>
      <header className="app-header">
        <h1>
          <i className="bi bi-piggy-bank me-2"></i>
          Budget Tracker
        </h1>
        <p>Gérez vos revenus et dépenses en toute simplicité</p>
      </header>
      <section className="mb-4">
        <TransactionForm onAddTransaction={handleAddTransaction} />
      </section>

      <section className="tracker-card">
        <h2 className="section-title">
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
        <div className="empty-state">
          <i className="bi bi-inbox"></i>
          <p>Aucune transaction à afficher.</p>
          <p className="mt-1" style={{ fontSize: '0.82rem' }}>
            La liste des transactions arrive bientôt.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
