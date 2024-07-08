import "./App.css";
import useTodos from "../Todos";
import useIsOnline from "./useIsOnline";
import useMousePointer from "./useMousePointer";
import useInterval from "./useInterval";
import { useState } from "react";
import useDebounce from "./useDebounce";

function App() {
  const [value, setValue] = useState(0);
  const debouncedValue = useDebounce(value, 5000);
  return (
    <>
      Debounced value is {debouncedValue}
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </>
  );
  //----------------------------
  // const [count, setCount] = useState(0);
  // useInterval(() => {
  //   setCount((c) => c + 1);
  // }, 1000);
  // return <>Timer is at {count}</>;
  //-----------------------------
  // const isOnline = useIsOnline();
  // if (isOnline) {
  //   return "userisonline";
  // }
  // return "userisoffline";
  //-----------------------------
  // const mousePointer = useMousePointer();

  // return (
  //   <>
  //     Your mouse position is {mousePointer.x} {mousePointer.y}
  //   </>
  // );
  //-----------------------------
  // const { todos, loading } = useTodos(5);

  // if (loading) {
  //   return <div>loading...</div>;
  // }

  // return (
  //   <>
  //     <div>
  //       {todos.map((todo) => (
  //         <Track key={todo.id} todo={todo} />
  //       ))}
  //     </div>
  //   </>
  // );
  //-----------------------------
}

function Track({ todo }) {
  return (
    <>
      <div>
        {todo.title}
        <br />
        {todo.description}
      </div>
    </>
  );
}

export default App;
