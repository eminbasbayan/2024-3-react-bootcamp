import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import AddNewProduct from "./AddNewProduct";
import Spinner from "../UI/Spinner";
import { addDoc, collection, getDocs } from "firebase/firestore";
import "./Products.css";
import { db } from "../../firebaseConfig";

function Products() {
  const [products, setProducts] = useState([]);
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [productToUpdate, setProductToUpdate] = useState();
  const [categories, setCategories] = useState([]);
  const [productData, setProductData] = useState({
    title: "",
    image: "",
    price: "",
    description: "",
    categoryId: "",
  });

  async function addData(newProduct) {
    try {
      const docRef = await addDoc(collection(db, "products"), newProduct);
      console.log(docRef.id);

      return { id: docRef.id, ...newProduct };
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(productData) {
    const newProduct = {
      ...productData,
      price: Number(productData.price),
    };

    addData(newProduct).then((savedProduct) => {
      setProducts([savedProduct, ...products]);
    });
  }

  async function fetchCategories() {
    setCategories([]);
    try {
      const querySnapshot = await getDocs(collection(db, "categories"));
      const categoriesArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(categoriesArray);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchProducts() {
    setProducts([]);
    setIsShowLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(productsArray?.filter((item) => item.categoryId));
      setProducts(productsArray);
    } catch (error) {
      console.log(error);
    } finally {
      setIsShowLoading(false);
    }
  }

  function handleUpdateItem(product) {
    setProductToUpdate(product);
    setProductData(product);
  }

  useEffect(() => {
    fetchProducts();
    fetchCategories();
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
        setProductToUpdate={setProductToUpdate}
        fetchProducts={fetchProducts}
        categories={categories}
      />
      <div className="products-wrapper">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            category={product.category}
            description={product.description}
            onUpdateItem={handleUpdateItem}
            fetchProducts={fetchProducts}
          />
        ))}
      </div>
      {isShowLoading && <Spinner />}
    </div>
  );
}

export default Products;
