import { useContext } from "react";
import { CountContext } from "./Context";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <>
      <div>
        <RecoilRoot>
          <Count />
        </RecoilRoot>
      </div>
    </>
  );
}

function Count() {
  console.log("rerender");
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}
// so accprding to context api only the components which are using the context should rerender,not the others(here Count)
// but it doesnt happen Count also rerender even when its not using context , this is the shortcoming of context api which was resolved by
// state managemnet and recoil
// context api just maked the code more cleaner (only fix prop drilling )

// recoil gives us three hooks
//useRecoilState = set and gets both
//useRecoilValue = gets the value
//useSetRecoilValue = sets the value

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  //just needs the value it doesn't require to update it so we can use useRecoilValue
  return (
    <div>
      {count}
      <b>
        <EvenCountRenderer />
      </b>
    </div>
  );
}

//selector
function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);
  return <div>{isEven ? "It is Even" : null}</div>;
}

//setCount=(count+1);
// setCount(c=>c+1);
// setCount(function(c){
// return c+1;
// })
function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons re render ");

  return (
    <>
      {/* this makes this as performant as its get  */}
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
    </>
  );
}

export default App;
