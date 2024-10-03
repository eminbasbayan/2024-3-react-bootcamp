import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const productLoader = async ({ params }) => {
  const productId = params.productId;
  try {
    const productRef = doc(db, "products", productId);
    const productSnap = await getDoc(productRef);

    if (productSnap.exists()) {
      return productSnap.data();
    } else {
      throw new Response("Product not found", { status: 404 });
    }
  } catch (error) {
    throw new Response("Error fetching product data", { status: 500 });
  }
};
