import Counter from "./components/Counter";
import CategoryManagement from "./components/Firebase/CategoryManagement";
import Header from "./components/Layout/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="app container mx-auto">
      <Header />
      {/* content */}
      <div className="content mt-5">
        <Counter />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CategoryManagement />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
