import { useEffect, useState } from "react";

const useCounter = (forward = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forward) {
        setCount((prevCount) => prevCount + 1);
      } else {
        setCount((prevCount) => prevCount - 1);
      }
    }, 1000);

    // clean-up function
    return () => clearInterval(interval);
  }, [forward]);

  return count;
};

export default useCounter;
