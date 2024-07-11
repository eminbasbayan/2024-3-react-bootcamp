import "./ProductItem.css";

function ProductItem(props) {
  console.log(props);
  console.log(props.myName);
  console.log(props.numbers);

  return null;
  return (
    <div className="product-item">
      <div className="product-image">
        <img
          src={image}
          alt="product image"
        />
      </div>
      <div className="product-info">
        <strong className="product-title">
          {title}
        </strong>
        <span className="product-price">{price}₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
