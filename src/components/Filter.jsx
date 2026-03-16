function Filter({currentFilter, onFilterChange}) {

    // Filtres dispo
    const filters = [
        {value: 'all', label: 'Tous'},
        {value: 'income', label: 'Revenus'},
        {value: 'expense', label: 'Dépenses'},
    ];

    return (
        <div className="filter-group">
            {filters.map((filter) => (
                <button
                    key={filter.value}
                    className={`filter-btn ${currentFilter === filter.value ? 'active' : ''}`}
                    onClick={() => onFilterChange(filter.value)}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
}

export default Filter;
