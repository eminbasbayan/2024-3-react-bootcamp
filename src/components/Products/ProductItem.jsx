import PropTypes from "prop-types";
import Button from "../UI/Button";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { addToCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import "./ProductItem.css";

function ProductItem({
  id,
  image,
  title,
  price,
  category,
  description,
  onUpdateItem,
  fetchProducts,
}) {
  const productItem = { id, image, title, price, category, description };
  const dispatch = useDispatch()

  async function deleteData() {
    try {
      await deleteDoc(doc(db, "products", id));
      console.log("Product deleted successfully!");

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  }

  function handleDeleteItem() {
    deleteData();
  }

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt="product image" />
      </div>
      <div className="product-info">
        <div className="flex justify-between">
          <strong className="product-title line-1-clamp">{title}</strong>
          <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 ml-4">
            {category}
          </span>
        </div>

        <p className="product-description line-2-clamp">
          {description.slice(0, 70)}
        </p>
        <span className="product-price">{price}₺</span>
        <Button
          color="primary"
          onClick={() => dispatch(addToCart({ ...productItem, quantity: 1 }))}
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
