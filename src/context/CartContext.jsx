import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    
    const clearCart = () => {
        setCart([]);
    };

    const addToCart = (product) => {

        setCart((previusCart) => {

            const productExists = previusCart.findIndex(

                (item) => item.id === product.id
            );
            if (productExists >= 0) {

                const updatedCart = [...previusCart];

                updatedCart[productExists].quantity += 1;

                return updatedCart;
            } else {
                return [...previusCart, { ...product, quantity: 1 }]
            }
        })
    };

    const updateQuantity = (productId, quantity) => {

        setCart((previusCart) =>

            previusCart.map((product) =>
                product.id === productId
                    ? { ...product, quantity: product.quantity + quantity }
                    : product
            )
        )


    }

    const deleteProduct = (productId) => {

        setCart((previusCart) =>

            previusCart.filter((product) =>

                product.id !== productId
            )
        )
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, deleteProduct,clearCart }}>
            {children}
        </CartContext.Provider>
    )
}
// Hook personalizado para usar el contexto fácilmente

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
