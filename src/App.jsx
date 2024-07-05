import { useState } from "react";
import Products from "./Products";

function App() {
  const [name, setName] = useState("Arda Börcek");

  let fullName = "Arda Börcek";

  function handleNameChange() {
    fullName = "Emin Başbayan";
    setName(fullName);
    console.log(fullName);
  }

  return (
    <div className="app">
      <h1>Hello World!</h1>
      <span>React Bootcamp</span>
      <br />
      <p>{name}</p>
      <button onClick={handleNameChange}>Değiştir</button>
      <Products />
    </div>
  );
}

export default App;
