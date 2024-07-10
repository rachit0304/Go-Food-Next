import React, { createContext, useReducer, useEffect, useContext, useState } from 'react';

const CartContext = createContext();


const initialState = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE_CART':
      return action.payload;
      case 'ADD_TO_CART':
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...state, { ...action.payload, qty: 1 }];
      }
    case 'INCREASE_QUANTITY':
      return state.map(item =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    case 'DECREASE_QUANTITY':
      return state
        .map(item =>
          item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter(item => item.qty > 0);
 
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
      dispatch({ type: 'INITIALIZE_CART', payload: savedCart });
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, isInitialized]);

  return (
    <CartContext.Provider value={{ cart: cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart=()=>{
  return useContext(CartContext);
}

