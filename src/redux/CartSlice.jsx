import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // Array of cart items: { id, name, price, image, quantity, ... }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Add item to cart or increment quantity if already exists
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
        },

        // Remove item from cart by id
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item.id !== itemId);
        },

        // Update quantity of a specific item
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem) {
                if (quantity > 0) {
                    existingItem.quantity = quantity;
                } else {
                    // If quantity is 0 or less, remove the item
                    state.items = state.items.filter((item) => item.id !== id);
                }
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
