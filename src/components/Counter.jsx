import { useSelector } from "react-redux";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  
  return (
    <div className="counter">
      <h2>Counter</h2>
      <div className="buttons">
        <button className="btn btn-success btn-sm" onClick={() => {}}>
          Arttır
        </button>
        <strong className="mx-2">{count}</strong>
        <button className="btn btn-danger btn-sm" onClick={() => {}}>
          Azalt
        </button>
      </div>
    </div>
  );
};

export default Counter;
