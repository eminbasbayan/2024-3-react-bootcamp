import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { redirect } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

export const roleLoader = (requiredRole) => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        resolve(redirect("/auth/login"));
      } else {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();

          if (userData.role === requiredRole) {
            resolve(null);
          } else {
            resolve(redirect("/unauthorized"));
          }
        } else {
          resolve(redirect("/unauthorized"));
        }
      }
    });
  });
};
