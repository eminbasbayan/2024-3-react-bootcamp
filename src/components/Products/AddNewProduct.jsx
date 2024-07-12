import { useState } from "react";
import Button from "../UI/Button";
import "./AddNewProduct.css";

function AddNewProduct() {
  const [productData, setProductData] = useState({
    title: "",
    image: "",
    price: "",
    description: "",
  });

  function handleChange({ target: { name, value } }) {
    setProductData({ ...productData, [name]: value });
  }

  console.log(productData);

  return (
    <form className="product-form">
      <div className="product-input">
        <label>Title</label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Ürün ismi giriniz."
          name="title"
        />
      </div>
      <div className="product-input">
        <label>Image</label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Ürün görseli giriniz."
          name="image"
        />
      </div>
      <div className="product-input">
        <label>Description</label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Ürün açıklaması giriniz."
          name="description"
        />
      </div>
      <div className="product-input">
        <label>Price</label>
        <input
          type="number"
          onChange={handleChange}
          placeholder="Ürün fiyatı giriniz."
          name="price"
        />
      </div>
      <Button size="lg" color="success">
        Yeni Ürün Ekle
      </Button>
    </form>
  );
}

export default AddNewProduct;
