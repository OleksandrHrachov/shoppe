import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../store';
import { IProduct } from "../types/sharedTypes";

interface IInitState {
  isLoading: boolean;
  products: IProduct[]
}

const initialState: IInitState = {
  isLoading: false,
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loading: (state) => {
      state.isLoading = true;
    },
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    setProduct: (state, action: PayloadAction<IProduct>) => {
      state.products.push(action.payload);
      state.isLoading = false;
    },
  },
});

export const { setProducts, setProduct, loading } = productSlice.actions;

export const getState = (state: RootState) => state.products;

export default productSlice.reducer;
