import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  selectedCategory: string;
}

const initialState: ProductState = {
  selectedCategory: "All"
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    }
  }
});

export const { setCategory } = productSlice.actions;
export default productSlice.reducer;