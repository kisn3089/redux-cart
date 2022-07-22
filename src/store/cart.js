import { createSlice } from '@reduxjs/toolkit';

const initState = {
    isCart: false,
    notification: null
}

const cartSlice = createSlice ({
    name: 'cart',
    initialState: initState,
    reducers: {
        showCart(state) {
            state.isCart = !state.isCart
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        },
    }
})

export const isCartActions = cartSlice.actions;

export default cartSlice.reducer;
