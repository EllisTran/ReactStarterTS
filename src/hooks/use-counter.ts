import { useState } from "react";

const useCounter = (initialCount: number) => {
  const [count, setCounter] = useState(initialCount);

  const handleClick = (): void => {
    setCounter(count + 1);
  };

  return { count: count, increment: handleClick };
};

export default useCounter;
