import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemTocart: (state, { payload }) => {
      const { id } = payload;
      const doesitemExisit = state.find((item) => item.id === id);
      if (doesitemExisit) {
        return state.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      } else {
        state.push({ ...payload, quantity: 1 });
      }
    },
    deleteItemTocart: (state, { payload }) => {
      const { id } = payload;
      return state.filter((product) => product.id !== id);
    },

    incrementItemTocart: (state, { payload }) => {
      const { id } = payload;
      const product = state.find((product) => product.id === id);
      product.quantity++;
    },
    decrementItemTocart: (state, { payload }) => {
      const { id } = payload;
      const product = state.find((product) => product.id === id);
      if (product.quantity > 1) {
        product.quantity--;
      } else if (product.quantity === 1) {
        return state.filter((product) => product.id !== id);
      }
    },
  },
});

export default cartSlice.reducer;
export const {
  addItemTocart,
  deleteItemTocart,
  incrementItemTocart,
  decrementItemTocart,
} = cartSlice.actions;
