import { useMemo, useState } from "react";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

import "./App.css";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalNotifiacationSelector,
} from "./store/atoms/title";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);

  const totalNotifiacationCount = useRecoilValue(totalNotifiacationSelector);

  // const totalNotifiacationCount = useMemo(() => {
  //   return (
  //     networkNotificationCount +
  //     notificationsAtomCount +
  //     jobsAtomCount +
  //     messagingAtomCount
  //   );
  // }, [
  //   networkNotificationCount,
  //   notificationsAtomCount,
  //   jobsAtomCount,
  //   messagingAtomCount,
  // ]);

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
          <button>Jobs ({jobsAtomCount})</button>
          <button>Messaging ({messagingAtomCount})</button>
          <button>Notifications ({notificationsAtomCount})</button>
          <button>total({totalNotifiacationCount})</button>
          <ButtonUpdater />
        </div>
      </>
    </>
  );
}
function ButtonUpdater() {
  const setMessagingAtomCount = useSetRecoilState(messagingAtom);
  return (
    <button
      onClick={() => {
        setMessagingAtomCount((c) => c + 1);
      }}
    >
      Me
    </button>
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
