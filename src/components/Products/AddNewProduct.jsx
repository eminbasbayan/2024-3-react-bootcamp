import { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "../UI/Button";
import ProductInput from "./ProductInput";

import "./AddNewProduct.css";
import Modal from "../UI/Modal";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const productInputs = [
  {
    label: "Title*",
    type: "text",
    placeholder: "Ürün ismi giriniz.",
    name: "title",
  },
  {
    label: "Image*",
    type: "text",
    placeholder: "Ürün görseli giriniz.",
    name: "image",
  },
  {
    label: "Description*",
    type: "text",
    placeholder: "Ürün açıklaması giriniz.",
    name: "description",
  },
  {
    label: "Price*",
    type: "number",
    placeholder: "Ürün fiyatı giriniz.",
    name: "price",
  },
];

function AddNewProduct({
  handleSubmit,
  productData,
  setProductData,
  productToUpdate,
  setProductToUpdate,
  fetchProducts,
  categories
}) {
  const [isShowModal, setIsShowModal] = useState(false);


  function handleChange({ target: { name, value } }) {
    setProductData({ ...productData, [name]: value });
  }

  function clearInputs() {
    setProductData({
      title: "",
      image: "",
      price: "",
      description: "",
    });
  }

  async function onSubmit(event) {
    event.preventDefault();

    const isFormValid = Object.values(productData).every(
      (value) => String(value).trim() !== ""
    );

    if (!isFormValid) {
      setIsShowModal(true);
      return;
    }

    if (productToUpdate) {
      const productRef = doc(db, "products", productToUpdate.id);
      await updateDoc(productRef, productData);
      fetchProducts();
      setProductToUpdate();
      clearInputs();
      return;
    }

    handleSubmit(productData);
    clearInputs();
  }

  return (
    <Fragment>
      <form className="product-form" onSubmit={onSubmit}>
        {productInputs.map((input, index) => (
          <ProductInput
            key={index}
            value={productData[input.name]}
            {...input}
            handleChange={handleChange}
          />
        ))}
        <select
          value={productData.categoryId}
          onChange={(e) =>
            setProductData({ ...productData, categoryId: e.target.value })
          }
        >
          <option value="" disabled>
            Select Category
          </option>
          {categories?.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        {productToUpdate ? (
          <Button size="lg" color="primary">
            Ürünü Güncelle
          </Button>
        ) : (
          <Button size="lg" color="success">
            Yeni Ürün Ekle
          </Button>
        )}
      </form>
      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          title="Form Kontrol"
          desc="Input alanları boş geçilemez!"
        />
      )}
    </Fragment>
  );
}

AddNewProduct.propTypes = {
  handleSubmit: PropTypes.func,
  productData: PropTypes.object,
  setProductData: PropTypes.func,
  productToUpdate: PropTypes.object,
  setProductToUpdate: PropTypes.func,
  fetchProducts: PropTypes.func,
};

export default AddNewProduct;
