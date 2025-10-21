import React from 'react';

const CartWidget = () => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <span role="img" aria-label="carrito" style={{ fontSize: '24px' }}>🛒</span>
      <span style={{
        position: 'absolute',
        top: '-8px',
        right: '-8px',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '2px 6px',
        fontSize: '12px'
      }}>
        7
      </span>
    </div>
  );
};

export default CartWidget;
