import { configureStore } from '@reduxjs/toolkit'
// import React from 'react'
import cartReducer from './features/cart/CartSlice'
import modalReducer from './features/modal/ModalSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
    },
});