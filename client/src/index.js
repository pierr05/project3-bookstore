import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import ApiContextProvider from './contexts/ApiContext';
import SidebarProvider from './contexts/SidebarContext';
import CartProvider from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById
  ('root'));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ApiContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ApiContextProvider>
    </CartProvider>
  </SidebarProvider>
);
