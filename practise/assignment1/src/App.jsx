import { useState, useMemo } from "react";
import "./App.css";

export function App() {
  const [input, setInput] = useState(0);
  // let expensiveVal = 1;

  // for (let i = 1; i <= input; i++) {
  //   expensiveVal = expensiveVal * i;
  // }
  const expensiveVal = useMemo(() => {
    let value = 1;
    for (let i = 1; i <= input; i++) {
      value = value * i;
    }
    return value;
  }, [input]);
  return (
    <>
      <div>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <p>Calculated Value : {expensiveVal}</p>
      </div>
    </>
  );
}

export default App;
