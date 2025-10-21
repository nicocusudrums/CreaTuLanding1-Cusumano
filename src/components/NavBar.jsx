import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#333',
      color: 'white'
    }}>
      <h1>Tienda de Zapatitos Nada Que Ver</h1>

      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0
      }}>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Hombres</a></li>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Mujeres</a></li>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Niños</a></li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
