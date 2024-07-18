import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../UI/Button";
import ProductInput from "./ProductInput";

import "./AddNewProduct.css";

const productInputs = [
  {
    label: "Title",
    type: "text",
    placeholder: "Ürün ismi giriniz.",
    name: "title",
  },
  {
    label: "Image",
    type: "text",
    placeholder: "Ürün görseli giriniz.",
    name: "image",
  },
  {
    label: "Description",
    type: "text",
    placeholder: "Ürün açıklaması giriniz.",
    name: "description",
  },
  {
    label: "Price",
    type: "number",
    placeholder: "Ürün fiyatı giriniz.",
    name: "price",
  },
];

function AddNewProduct({ handleSubmit }) {
  const [productData, setProductData] = useState({
    title: "",
    image: "",
    price: "",
    description: "",
  });

  function handleChange({ target: { name, value } }) {
    setProductData({ ...productData, [name]: value });
  }

  return (
    <form
      className="product-form"
      onSubmit={(event) => handleSubmit(event, productData)}
    >
      {productInputs.map((input, index) => (
        <ProductInput key={index} {...input} handleChange={handleChange} />
      ))}

      <Button size="lg" color="success">
        Yeni Ürün Ekle
      </Button>
    </form>
  );
}

AddNewProduct.propTypes = {
  handleSubmit: PropTypes.func,
};

export default AddNewProduct;
