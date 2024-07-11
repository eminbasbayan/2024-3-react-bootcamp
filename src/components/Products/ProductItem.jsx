const productImgCss = {
  width: "200px",
  height: "200px",
};

const productInfoCss = {
  display: "flex",
  flexDirection: "column",
};

function ProductItem() {
  return (
    <div className="product-item">
      <div className="product-image">
        <img
          src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          alt="product image"
          style={productImgCss}
        />
      </div>
      <div className="product-info" style={productInfoCss}>
        <strong className="product-title">
          Mens Casual Premium Slim Fit T-Shirts
        </strong>
        <span className="product-price">100₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
