import React, { useState } from 'react';
import BuscadorMoneda from './assets/componet/BuscadorMoneda';
import MiApi from './assets/componet/Miapi';


function App() {
  const [selectedMoneda, setSelectedMoneda] = useState('');

  const handleSearchMoneda = moneda => {
    setSelectedMoneda(moneda);
  };

  return (
    <div className="landing-page">
      <header>
        {}
      </header>
      <main>
        {}
        <section className="moneda">
          <BuscadorMoneda onSearch={handleSearchMoneda} />
          {selectedMoneda && <MiApi moneda={selectedMoneda} />}
        </section>
      </main>
      <footer>
        <p>SE RESERVAN TODOS LOS DERECHOS.</p>
      </footer>
    </div>
  );
}

export default App;



