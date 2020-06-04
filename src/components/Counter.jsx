import React, { useState } from "react";

const Counter = () => {
  const [count, setIncrement] = useState(0);

  const increment = () => setIncrement(count + 1);
  const decrement = () => setIncrement(count - 1);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
