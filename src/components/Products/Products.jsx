import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import AddNewProduct from "./AddNewProduct";
import Spinner from "../UI/Spinner";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
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

      return { id: docRef.id, ...newProduct };
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(productData) {
    const newProduct = {
      ...productData,
      price: Number(productData.price),
      categoryId: doc(db, "categories", productData.categoryId),
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

      const newProducts = productsArray.map((item) => {
        if (item.categoryId) {
          getCategory(item.categoryId);
          const findCategory = categories.find(
            (cItem) => cItem.id === item.categoryId
          );
          return {
            ...item,
            categoryInfo: findCategory || null, // Return null if the category is not found
            category: findCategory.name,
          };
        } else {
          return item;
        }
      });
      setProducts(productsArray); // Set the modified products array with categoryInfo
    } catch (error) {
      console.log(error);
    } finally {
      setIsShowLoading(false);
    }
  }

  async function getCategory(categoryId) {
    const q = query(
      collection(db, "products"),
      where("categoryId", "==", doc(db, "categories", categoryId))
    );
    const querySnapshot = await getDocs(q);
  }

  function handleUpdateItem(product) {
    setProductToUpdate(product);
    setProductData(product);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      fetchProducts();
    }
  }, [categories]);

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
