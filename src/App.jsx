import Products from "./components/Products/Products";
import Button from "./components/UI/Button";

function App() {
  return (
    <div className="app">
      <h1>Hello World!</h1>
      <Button color="primary" size="lg" addClass="w-100">
        Update
      </Button>
      <br />
      <Button color="success" size="md">
        Add
      </Button>
      <br />
      <Button color="danger" size="sm">
        <strong>Delete</strong>
      </Button>
      <Products />
    </div>
  );
}

export default App;
