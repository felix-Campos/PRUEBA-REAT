
import React, { useState, useEffect } from 'react';

function MiApi({ moneda }) {
  const [indicador, setIndicador] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (moneda) {
      fetch(`https://mindicador.cl/api/${moneda}`)
        .then(response => response.json())
        .then(data => {
          setIndicador(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, [moneda]);

  return (
    <div>
      <h2>GRACIAS POR CONSULTAR!</h2>
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <div>
          <p>Moneda: {moneda}</p>
          <p>Valor: {indicador.serie[0].valor}</p>
          {}
        </div>
      )}
    </div>
  );
}

export default MiApi;
