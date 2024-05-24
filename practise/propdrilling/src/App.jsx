import { useContext, useState } from "react";
import { CountContext } from "./Context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <CountContext.Provider value={count}>
          <Count setCount={setCount} />
        </CountContext.Provider>
      </div>
    </>
  );
}

function Count({ setCount }) {
  // console.log("rerender");
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  );
}
// so accprding to context api only the components which are using the context should rerender,not the others(here Count)
// but it doesnt happen Count also rerender even when its not using context , this is the shortcoming of context api which was resolved by
// state managemnet and recoil
// context api just maked the code more cleaner (only fix prop drilling )

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
