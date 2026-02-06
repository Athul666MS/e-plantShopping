import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (plant) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === plant.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === plant.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevItems, { ...plant, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, amount) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: Math.max(0, item.quantity + amount) };
                }
                return item;
            }).filter((item) => item.quantity > 0)
        );
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, totalItems, totalCost }}>
            {children}
        </CartContext.Provider>
    );
};
