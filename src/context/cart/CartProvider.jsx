import { useState } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  function addToCart(item) {
    const findCartItem = cartItems.find((cItem) => cItem.id === item.id);
    if (findCartItem) {
      const newCartItems = cartItems.map((cItem) => {
        if (cItem.id === findCartItem.id) {
          return {
            ...cItem,
            quantity: cItem.quantity + 1,
          };
        }
        return cItem;
      });
      setCartItems(newCartItems);
    } else {
      setCartItems((cartItems) => [...cartItems, item]);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
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
