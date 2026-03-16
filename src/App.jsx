import './index.css';

function App() {

  return (
    <div className="container py-4" style={{ maxWidth: '900px' }}>
      <header className="app-header">
        <h1>
          <i className="bi bi-piggy-bank me-2"></i>
          Budget Tracker
        </h1>
        <p>Gérez vos revenus et dépenses en toute simplicité</p>
      </header>

      <section className="tracker-card">
        <h2 className="section-title">
          <i className="bi bi-list-ul"></i>
          Transactions
        </h2>
        <div className="empty-state">
          <i className="bi bi-inbox"></i>
          <p>Aucune transaction à afficher.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
