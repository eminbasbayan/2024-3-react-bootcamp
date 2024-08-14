import { useContext } from "react";
import PropTypes from "prop-types";
import Button from "../UI/Button";
import "./ProductItem.css";
import { CartContext } from "../../context/cart/CartContext";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

function ProductItem({
  id,
  image,
  title,
  price,
  description,
  onUpdateItem,
  fetchProducts
}) {
  const { addToCart } = useContext(CartContext);
  const productItem = { id, image, title, price, description };

  async function deleteData(){
    try {
      await deleteDoc(doc(db, "products", id));
      console.log("Product deleted successfully!");

      fetchProducts()
    } catch (error) {
      console.log(error);
    }
  }

  function handleDeleteItem() {
    deleteData()
  }

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt="product image" />
      </div>
      <div className="product-info">
        <strong className="product-title line-1-clamp">{title}</strong>
        <p className="product-description line-2-clamp">
          {description.slice(0, 70)}
        </p>
        <span className="product-price">{price}₺</span>
        <Button
          color="primary"
          onClick={() => addToCart({ ...productItem, quantity: 1 })}
        >
          Add To Cart
        </Button>
        <Button
          color="secondary"
          addClass="mt-3"
          onClick={() => onUpdateItem(productItem)}
        >
          Update
        </Button>
        <Button color="danger" addClass="mt-3" onClick={handleDeleteItem}>
          Delete
        </Button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onUpdateItem: PropTypes.func.isRequired,
  fetchProducts: PropTypes.func.isRequired,

};

export default ProductItem;
