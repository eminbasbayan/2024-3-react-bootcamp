import { useState } from "react";
import ProductItem from "./ProductItem";
import AddNewProduct from "./AddNewProduct";
import "./Products.css";
import Spinner from "../UI/Spinner";

function Products() {
  const [products, setProducts] = useState([]);
  const [isShowLoading, setIsShowLoading] = useState(false);

  function handleSubmit(productData) {
    const newProduct = {
      ...productData,
      id: Math.random(),
      price: Number(productData.price),
    };

    setProducts([newProduct, ...products]);
  }

  function fetchProducts() {
    setProducts([]);
    setIsShowLoading(true);
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err))
      .finally(() => setIsShowLoading(false));
  }

  return (
    <div className="products">
      <h2 className="text-4xl font-bold mb-5">Products Component</h2>
      <button onClick={fetchProducts} className="btn btn-primary mb-10">
        Get All Products
      </button>
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
      {isShowLoading && <Spinner />}
    </div>
  );
}

export default Products;
