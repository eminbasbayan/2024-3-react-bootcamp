import { useState } from "react";
import ProductItem from "./ProductItem";
import AddNewProduct from "./AddNewProduct";
import { productsData } from "../../data";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState(productsData);

  function handleSubmit(productData) {
    const newProduct = {
      ...productData,
      id: Math.random(),
      price: Number(productData.price),
    };

    setProducts([newProduct, ...products]);
  }

  return (
    <div className="products">
      <h2 className="text-4xl font-bold mb-5">Products Component</h2>
      <AddNewProduct handleSubmit={handleSubmit} />
      <div className="products-wrapper">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
