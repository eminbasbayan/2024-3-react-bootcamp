import Products from "./components/Products/Products";
import Button from "./components/UI/Button";


function App() {
  return (
    <div className="app">
      <h1>Hello World!</h1>
      <Button color="primary" size="lg" addClass="w-100" />
      <br />
      <Button color="success" size="md" />
      <br />
      <Button color="secondary" size="sm" />
      <Products />
    </div>
  );
}

export default App;
