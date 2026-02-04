import {createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        
        setCart((previousCart) => {
            const index = previousCart.findIndex((item) => item.id === product.id);

            if (index >= 0) {
                const updatedCart = [...previousCart];
                const existing = updatedCart[index];
                updatedCart[index] = {
                    ...existing,
                    quantity: (existing.quantity || 0) + 1,
                };
                return updatedCart;
            }

            const qty = product.quantity ?? product.cantidad ?? 1;
            return [...previousCart, {...product, quantity: qty}];
        });
    };

  return (
    <CartContext.Provider value={{cart, addToCart}}>
        {children}
    </CartContext.Provider>
  )
}
// Hook personalizado para usar el contexto fácilmente
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
