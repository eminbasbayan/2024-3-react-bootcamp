import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const count = useCounter();

  return <div className="text-3xl font-bold">{count}</div>;
};

export default ForwardCounter;
