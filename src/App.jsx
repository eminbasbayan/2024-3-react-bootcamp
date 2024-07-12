import Products from "./components/Products/Products";
import Button from "./components/UI/Button";


function App() {
  return (
    <div className="app">
      <h1>Hello World!</h1>
      <Button color="primary" />
      <br />
      <Button color="success" />
      <br />
      <Button color="secondary" />
      <br />
      <Button color="danger" />
      <br />
      <Button color="success" />
      <Products />
    </div>
  );
}

export default App;
