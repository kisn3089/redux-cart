import { createSlice } from "@reduxjs/toolkit";

const initState = {
    productItem: [],
    totalItem: 0,
}

const productItemSlice = createSlice({
    name: 'productItem',
    initialState: initState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existintItem = state.productItem.find(item => item.id === newItem.id);
            state.totalItem++;
            if(!existintItem) {
                state.productItem.push({
                    id: newItem.id, 
                    price: newItem.price, 
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            } else {
                existintItem.quantity++;
                existintItem.totalPrice = existintItem.totalPrice + newItem.price;
            }
        },
        removeItem(state, action) {
            const id = action.payload;
            const existintItem = state.productItem.find(item => item.id === id);
            state.totalItem--;
            if(existintItem.quantity === 1) {
            state.productItem = state.productItem.filter(item => item.id !== id);
            } else {
                existintItem.quantity--;
                existintItem.totalPrice = existintItem.totalPrice - existintItem.price;
            }
        },
    }
});

export const productItemActions = productItemSlice.actions;

export default productItemSlice.reducer;