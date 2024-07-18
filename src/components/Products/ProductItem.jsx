import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./ProductItem.css";

function ProductItem({ image, title, price, description }) {
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
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductItem;
