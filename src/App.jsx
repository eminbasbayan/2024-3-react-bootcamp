import Header from "./components/Layout/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="app container mx-auto">
      <Header />
      {/* content */}
      <div className="content mt-5">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
