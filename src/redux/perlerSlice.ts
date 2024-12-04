import { createSlice } from "@reduxjs/toolkit";

import { ProductItem } from "../../type";

interface InitialState {
  cart: ProductItem[];
  // userInfo: any;
}

const initialState: InitialState = {
  cart: [],
  // userInfo: null,
};

export const counterSlice = createSlice({
  name: "perler",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const existProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existProduct) {
        existProduct.quantity! += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    deleteCount: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    reseetCart: (state) => {
      state.cart = [];
    },

    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const { addUser, addTocart, removeUser, reseetCart, deleteCount } =
  counterSlice.actions;

export default counterSlice.reducer;
