import { useDispatch, useSelector } from "react-redux";
import { arttir, azalt } from "../redux/slices/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div className="buttons">
        <button className="btn btn-success btn-sm" onClick={() => dispatch(arttir())}>
          Arttır
        </button>
        <strong className="mx-2">{count}</strong>
        <button className="btn btn-danger btn-sm" onClick={() => dispatch(azalt())}>
          Azalt
        </button>
      </div>
    </div>
  );
};

export default Counter;
