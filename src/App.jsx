import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer Saludo="¡Bienvenido a Tienda de Zapatitos Nada Que Ver!" />
    </div>
  );
}

export default App;
