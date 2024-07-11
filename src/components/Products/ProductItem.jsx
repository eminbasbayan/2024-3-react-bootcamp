import PropTypes from "prop-types";
import "./ProductItem.css";

function ProductItem(props) {
  
  return (
    <div className="product-item">
      <div className="product-image">
        <img
          src={props.image}
          alt="product image"
        />
      </div>
      <div className="product-info">
        <strong className="product-title">
          {props.title}
        </strong>
        <span className="product-price">{props.price}₺</span>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default ProductItem;
