import { useState } from "react";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

import "./App.css";
import { networkAtom } from "./store/atoms/title";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  return (
    <>
      <>
        <div>
          <button>Home</button>
          <button>
            My Network (
            {networkNotificationCount >= 100 ? "99+" : networkNotificationCount}
            )
          </button>
          <button>Jobs ()</button>
          <button>Messaging ()</button>
          <button>Notifications ()</button>
          <button>Me</button>
        </div>
      </>
    </>
  );
}

function Todo() {
  const [title, setTitle] = useState("");
  return (
    <div>
      <input
        placeholder="title"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <input placeholder="description" />
      <button>Add Todo</button>
    </div>
  );
}
export default App;
