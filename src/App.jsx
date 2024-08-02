import { useState } from "react";
import Header from "./components/Layout/Header";
import HomePage from "./pages/HomePage";

function App() {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  console.log("App re-rendered!");

  return (
    <div className="app container mx-auto">
      <Header cartItems={cartItems} />
      {/* content */}
      <div className="content mt-5">
        <HomePage setCartItems={setCartItems} />
      </div>
    </div>
  );
}

export default App;
