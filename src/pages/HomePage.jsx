import Products from "../components/Products/Products";

const HomePage = ({ setCartItems }) => {
  console.log("home page re-rendered!");
  
  return (
    <div className="home-page">
      <Products setCartItems={setCartItems} />
    </div>
  );
};

export default HomePage;
