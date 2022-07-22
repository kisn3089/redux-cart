import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart';
import productItemReducer from './productItem';

const store = configureStore ({
    reducer: {
        isCart: cartReducer,
        productItem: productItemReducer
    }
});

export default store;