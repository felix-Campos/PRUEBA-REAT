import React, { useState } from 'react';

function BuscadorMoneda({ onSearch }) {
  const [selectedMoneda, setSelectedMoneda] = useState('');
  const [error, setError] = useState('');
  const monedasDisponibles = ['dolar', 'euro',];

  const handleSearch = () => {
    if (monedasDisponibles.includes(selectedMoneda)) {
      setError('');
      onSearch(selectedMoneda);
    } else {
      setError('Moneda no válida. Por favor, elige una moneda de la lista.');
    }
  };

  return (
    <div>
      <h2>CONSULTE SU CAMBIO DEL DIA</h2>
      <select value={selectedMoneda} onChange={e => setSelectedMoneda(e.target.value)}>
        <option value="">Selecciona una moneda</option>
        {monedasDisponibles.map(moneda => (
          <option key={moneda} value={moneda}>
            {moneda}
          </option>
        ))}
      </select>
      <button onClick={handleSearch} disabled={!selectedMoneda}>Buscar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default BuscadorMoneda;



