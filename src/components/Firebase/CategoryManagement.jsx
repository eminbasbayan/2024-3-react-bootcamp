import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

const CategoryManagement = () => {
    const [categories, setCategories] = useState([])
  const [categoryData, setCategoryData] = useState({
    name: "",
    description: "",
    image: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addDoc(collection(db, "categories"), categoryData);
      console.log("categori eklendi!");
      setCategoryData({
        name: "",
        description: "",
        image: "",
      })
      fetchCategories()
    } catch (error) {
      console.log(error);
    }
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

  useEffect(()=>{
    fetchCategories()
  }, [])

  return (
    <div className="category-management">
      <h1>Categories</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="category name"
          value={categoryData.name}
          onChange={(e) =>
            setCategoryData({ ...categoryData, name: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="category description"
          value={categoryData.description}
          onChange={(e) =>
            setCategoryData({ ...categoryData, description: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="category image"
          value={categoryData.image}
          onChange={(e) =>
            setCategoryData({ ...categoryData, image: e.target.value })
          }
          required
        />
        <button type="submit">Add Category</button>
      </form>
      {categories?.map((category)=> (
        <div className="category-item" key={category.id}>
         <p>name: {category.name}</p>
         <p>desc: {category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryManagement;
