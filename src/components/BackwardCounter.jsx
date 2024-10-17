import useCounter from "../hooks/use-counter";

const BackwardCounter = () => {
  const count = useCounter(false);

  return <div className="text-3xl font-bold">{count}</div>;
};

export default BackwardCounter;
