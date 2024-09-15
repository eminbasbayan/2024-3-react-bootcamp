import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "products", productId); // 'products' Firestore koleksiyonu
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          setProduct(productSnap.data());
        } else {
          console.log("Ürün bulunamadı");
        }
      } catch (error) {
        console.error("Veri çekilirken hata oluştu: ", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>; // Ürün yüklenene kadar yükleniyor göster
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-20">
      <div className="bg-gray-200 h-64">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-semibold text-gray-800">
            ${product.price}
          </span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
