import { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  // State local pour les champs du formulaire
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  // State pour les erreurs de validation
  const [errors, setErrors] = useState({});

  // Validation des champs du formulaire
  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Le titre est obligatoire.';
    }

    if (!amount || parseFloat(amount) <= 0) {
      newErrors.amount = 'Le montant doit être supérieur à 0.';
    }

    if (!date) {
      newErrors.date = 'La date est obligatoire.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      console.warn('Formulaire invalide, veuillez corriger les erreurs.');
      return;
    }

    // Creation de l'objet transaction
    const newTransaction = {
      id: Date.now(),
      title: title.trim(),
      amount: parseFloat(amount),
      type: type,
      date: date,
    };

    onAddTransaction(newTransaction);
    console.log('Transaction ajoutée :', newTransaction.title);

    // Reinitialisation du formulaire apres soumission
    setTitle('');
    setAmount('');
    setType('expense');
    setDate(new Date().toISOString().split('T')[0]);
    setErrors({});
  };

  return (
    <div className="tracker-card">
      <h2 className="section-title">
        <i className="bi bi-plus-circle"></i>
        Nouvelle transaction
      </h2>

      <form onSubmit={handleSubmit} noValidate>
        <div className="row g-3">
          {/* Champ titre */}
          <div className="col-md-6">
            <label htmlFor="title" className="form-label">
              Titre
            </label>
            <input
              type="text"
              id="title"
              className={`form-control ${errors.title ? 'is-invalid' : ''}`}
              placeholder="Ex : Salaire, Courses..."
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            {errors.title && (
              <div className="invalid-feedback">{errors.title}</div>
            )}
          </div>

          {/* Champ montant */}
          <div className="col-md-6">
            <label htmlFor="amount" className="form-label">
              Montant (EUR)
            </label>
            <input
              type="number"
              id="amount"
              className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
              placeholder="0.00"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
            {errors.amount && (
              <div className="invalid-feedback">{errors.amount}</div>
            )}
          </div>

          {/* Champ type */}
          <div className="col-md-6">
            <label htmlFor="type" className="form-label">
              Type
            </label>
            <select
              id="type"
              className="form-select"
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option value="expense">Dépense</option>
              <option value="income">Revenu</option>
            </select>
          </div>

          {/* Champ date */}
          <div className="col-md-6">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              id="date"
              className={`form-control ${errors.date ? 'is-invalid' : ''}`}
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
            {errors.date && (
              <div className="invalid-feedback">{errors.date}</div>
            )}
          </div>

          {/* Bouton de soumission */}
          <div className="col-12 mt-3">
            <button type="submit" className="btn btn-tracker btn-tracker-primary w-100">
              <i className="bi bi-plus-lg me-2"></i>
              Ajouter la transaction
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
