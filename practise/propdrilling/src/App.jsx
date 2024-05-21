import { useContext, useState } from "react";
import { CountContext } from "./Context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <CountContext.Provider value={count}>
          <Count count={count} setCount={setCount} />
        </CountContext.Provider>
      </div>
    </>
  );
}

function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  );
}
function CountRenderer() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}
function Buttons({ setCount }) {
  const count = useContext(CountContext);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
}

export default App;
