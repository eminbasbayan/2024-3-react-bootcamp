import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./ProductItem.css";

function ProductItem({ setProducts, id, image, title, price, description }) {
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
        <strong className="product-title">{title}</strong>
        <p className="product-description">{description.slice(0, 70)}</p>
        <span className="product-price">{price}₺</span>
        <Button color="primary" size="lg">
          Add To Cart
        </Button>
        <Button
          color="danger"
          size="lg"
          addClass="mt-3"
          onClick={handleDeleteItem}
        >
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
};

export default ProductItem;
