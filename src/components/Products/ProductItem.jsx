import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./ProductItem.css";
import { useEffect } from "react";

function ProductItem({ setTitleState, image, title, titleState, price }) {
  useEffect(() => {
    setTitleState(title);
  }, [setTitleState, title]);

  function handleTitleChange() {
    setTitleState("Gömlek");
  }

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt="product image" />
      </div>
      <div className="product-info">
        <strong className="product-title">{titleState}</strong>
        <span className="product-price">{price}₺</span>
        <Button color="primary" size="lg" onClick={handleTitleChange}>
          Title Change
        </Button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  titleState: PropTypes.string,
  setTitleState: PropTypes.func,
};

export default ProductItem;
