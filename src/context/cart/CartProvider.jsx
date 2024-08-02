import PropTypes from "prop-types";
import { CartContext } from "./CartContext";

function CartProvider({ children }) {
  const fullName = "Emin Başbayan";

  return (
    <CartContext.Provider
      value={{
        fullName,
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
