import { useReducer } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";
import { cartReducer, initialState } from "../reducers/cartReducer";

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  function addToCart(item) {
    dispatch({ type: "ADD_TO_CART", cartItem: item });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node,
};
export default CartProvider;
