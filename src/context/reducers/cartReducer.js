export const initialState = {
  cartItems: [],
  totals: 0,
};

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const findCartItem = state.cartItems.find(
        (cItem) => cItem.id === action.cartItem.id
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
        const newCartItems = [...state.cartItems, action.cartItem];
        return {
          ...state,
          cartItems: newCartItems,
        };
      }
    }
    case "DELETE_FROM_CART":
      break;

    default:
      break;
  }
}
