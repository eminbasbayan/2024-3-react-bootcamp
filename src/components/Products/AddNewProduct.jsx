import { useState } from "react";
import Button from "../UI/Button";
import "./AddNewProduct.css";

function AddNewProduct() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  console.log({
    title,
    image,
    price,
    description,
  });

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleImageChange(event) {
    setImage(event.target.value);
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  function handleDescChange(event) {
    setDescription(event.target.value);
  }

  return (
    <form className="product-form">
      <div className="product-input">
        <label>Title</label>
        <input
          type="text"
          onChange={handleTitleChange}
          placeholder="Ürün ismi giriniz."
        />
      </div>
      <div className="product-input">
        <label>Image</label>
        <input
          type="text"
          onChange={handleImageChange}
          placeholder="Ürün görseli giriniz."
        />
      </div>
      <div className="product-input">
        <label>Description</label>
        <input
          type="text"
          onChange={handleDescChange}
          placeholder="Ürün açıklaması giriniz."
        />
      </div>
      <div className="product-input">
        <label>Price</label>
        <input
          type="number"
          onChange={handlePriceChange}
          placeholder="Ürün fiyatı giriniz."
        />
      </div>
      <Button size="lg" color="success">
        Yeni Ürün Ekle
      </Button>
    </form>
  );
}

export default AddNewProduct;
