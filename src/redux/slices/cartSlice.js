import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      
        const findCartItem = state.cartItems.find(
            (cItem) => cItem.id === action.payload.id
          );
        
          if (findCartItem) {
            const newCartItems = state.cartItems.map((cItem) => {
              if (cItem.id === findCartItem.id) {
                return {
                  ...cItem,
                  quantity: cItem.quantity + 1,
                };
              }
              return cItem;
            });
            return {
              ...state,
              cartItems: newCartItems,
            };
          } else {
            const newCartItems = [...state.cartItems, action.payload];
            return {
              ...state,
              cartItems: newCartItems,
            };
          }
    },
    removeFromCart: () => {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
