import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    productData: [],
    loading: "idle", // idle || loading || succeeded || failed
    error: null,
  },
  reducers: {
    updateProduct: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.productData = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
      });
  },
});

export const { updateProduct } = productSlice.actions;

export default productSlice.reducer;
