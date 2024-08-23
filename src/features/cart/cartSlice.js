/**
 *  Project: fast-react-pizza
 *  File: cartSlice.js
 *  Created: 2:17 CH, 23/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      if (state.cart.some((item) => item.pizzaId === action.payload.pizzaId))
        return;

      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const index = state.cart.findIndex(
        (item) => item.pizzaId === action.payload,
      );
      state.cart.at(index).quantity++;
    },
    decreaseItemQuantity(state, action) {
      const index = state.cart.findIndex(
        (item) => item.pizzaId === action.payload,
      );
      state.cart.at(index).quantity > 0
        ? state.cart.at(index).quantity--
        : this.deleteItem(action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

const getCart = (state) => state.cart.cart;
const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((acc, cur) => acc + cur.totalPrice, 0);

const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((acc, cur) => acc + cur.quantity, 0);

export { getCart, getTotalCartPrice, getTotalCartQuantity };
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
