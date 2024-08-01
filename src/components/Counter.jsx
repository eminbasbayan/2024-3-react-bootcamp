import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Ahmet");

  //   useEffect(() => {
  //     console.log("run!");
  //   });

  // componentDidMount()
  //   useEffect(() => {
  //     console.log("run!");
  //   }, []);

  // componentDidUpdate()
  useEffect(() => {
    console.log("run!");
  }, [title]);

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div className="buttons">
        <button
          className="btn btn-success btn-sm"
          onClick={() => setCount(count + 1)}
        >
          Arttır
        </button>
        <strong className="mx-2">{count}</strong>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => setCount(count - 1)}
        >
          Azalt
        </button>
      </div>
      <button
        className="btn btn-danger btn-sm mt-4"
        onClick={() => setTitle("Mehmet")}
      >
        Title Change
      </button>
      <p>{title}</p>
    </div>
  );
};

export default Counter;
