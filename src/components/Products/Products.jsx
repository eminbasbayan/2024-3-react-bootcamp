import { useState } from "react";
import ProductItem from "./ProductItem";
import { productsData } from "../../data";
import "./Products.css";

function Products() {
  const [titleState, setTitleState] = useState("Şapka");

  return (
    <div className="products">
      <h2>Products Component</h2>
      <div className="products-wrapper">
        {productsData.map((product) => (
          <ProductItem
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            titleState={titleState}
            setTitleState={setTitleState}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
