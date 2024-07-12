import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./ProductItem.css";

function ProductItem({ setTitleState, image, title, price }) {

  function handleTitleChange() {
    setTitleState("Gömlek");
  }

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt="product image" />
      </div>
      <div className="product-info">
        <strong className="product-title">{title}</strong>
        <span className="product-price">{price}₺</span>
        <Button color="primary" size="lg" onClick={handleTitleChange}>
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  setTitleState: PropTypes.func,
};

export default ProductItem;
