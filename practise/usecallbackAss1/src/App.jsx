import { useCallback, useState, memo } from "react";
import "./App.css";

export function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  const handleDecrement = useCallback(() => {
    setCount((count) => count - 1);
  }, []);
  return (
    <div>
      <p>Count:{count}</p>
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}
const CounterButtons = memo(({ onIncrement, onDecrement }) => (
  <div>
    <button onClick={onIncrement}> Increment</button>
    <button onClick={onDecrement}> Decrement</button>
  </div>
));
