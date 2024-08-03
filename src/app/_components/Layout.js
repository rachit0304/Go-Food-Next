import React from 'react';
import { CartProvider } from '../context/CartContext';

const Layout = ({ children }) => {
  return (
    <CartProvider>
      <div>
        <main>{children}</main>
      </div>
    </CartProvider>
  );
};

export default Layout;
