import { useState } from "react";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <RecoilRoot>
          <Todo />
        </RecoilRoot>
      </div>
    </>
  );
}
function Todo() {
  const [title, setTitle] = useState("")
  return (
    <div>
      <input placeholder="title" onChange={(e)=>{
        setValue(e.target.value)
      }} />
      <input placeholder="description" />
      <button>Add Todo</button>
    </div>
  );
}
export default App;
