import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ReactNode } from "react";

interface CartItem {
  title: ReactNode;
  image: string | undefined;
  id: number;
  name: string;
  price: number;
  quantity: number; 
}


interface ProductState {
  selectedCategory: string;
  cart: CartItem[];
}

const initialState: ProductState = {
  selectedCategory: "All",
  cart: []
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
 addToCart: (state, action: PayloadAction<CartItem>) => {
      const exists = state.cart.find(item => item.id === action.payload.id);
      if (!exists) {
        state.cart.push(action.payload);
      }
    }
  }
});

export const { setCategory ,addToCart } = productSlice.actions;
export default productSlice.reducer;