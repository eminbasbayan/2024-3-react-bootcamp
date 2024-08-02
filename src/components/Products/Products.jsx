import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import AddNewProduct from "./AddNewProduct";
import Spinner from "../UI/Spinner";
import "./Products.css";

function Products({ setCartItems }) {
  const [products, setProducts] = useState([]);
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [productToUpdate, setProductToUpdate] = useState();
  const [productData, setProductData] = useState({
    title: "",
    image: "",
    price: "",
    description: "",
  });

  function handleSubmit(productData) {
    const newProduct = {
      ...productData,
      id: Math.random(),
      price: Number(productData.price),
    };

    setProducts([newProduct, ...products]);
  }

  console.log("products component re-renderer!");

  function fetchProducts() {
    setProducts([]);
    setIsShowLoading(true);
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err))
      .finally(() => setIsShowLoading(false));
  }

  function handleUpdateItem(product) {
    setProductToUpdate(product);
    setProductData(product);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products">
      <h2 className="text-4xl font-bold mb-5">Products Component</h2>
      <button onClick={fetchProducts} className="btn btn-primary mb-10">
        Get All Products
      </button>
      <AddNewProduct
        handleSubmit={handleSubmit}
        productData={productData}
        setProductData={setProductData}
        productToUpdate={productToUpdate}
        setProducts={setProducts}
        setProductToUpdate={setProductToUpdate}
      />
      <div className="products-wrapper">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            setProducts={setProducts}
            onUpdateItem={handleUpdateItem}
            setCartItems={setCartItems}
          />
        ))}
      </div>
      {isShowLoading && <Spinner />}
    </div>
  );
}

export default Products;
