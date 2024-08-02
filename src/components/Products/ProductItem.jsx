import { useContext } from "react";
import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./ProductItem.css";
import { CartContext } from "../../context/cart/CartContext";

function ProductItem({
  setProducts,
  id,
  image,
  title,
  price,
  description,
  onUpdateItem,
}) {
  const { addToCart } = useContext(CartContext);
  const productItem = { id, image, title, price, description };

  function handleDeleteItem() {
    setProducts((products) =>
      products.filter((product) => {
        return product.id !== id;
      })
    );
  }

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt="product image" />
      </div>
      <div className="product-info">
        <strong className="product-title line-1-clamp">{title}</strong>
        <p className="product-description line-2-clamp">
          {description.slice(0, 70)}
        </p>
        <span className="product-price">{price}₺</span>
        <Button
          color="primary"
          onClick={() => addToCart({ ...productItem, quantity: 1 })}
        >
          Add To Cart
        </Button>
        <Button
          color="secondary"
          addClass="mt-3"
          onClick={() => onUpdateItem(productItem)}
        >
          Update
        </Button>
        <Button color="danger" addClass="mt-3" onClick={handleDeleteItem}>
          Delete
        </Button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  setProducts: PropTypes.func.isRequired,
  onUpdateItem: PropTypes.func.isRequired,
};

export default ProductItem;
