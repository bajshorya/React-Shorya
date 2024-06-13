import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
});
export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 0,
});
export const jobsAtom = atom({
  key: "jobsAtom",
  default: 12,
});
export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});

export const totalNotifiacationSelector = selector({
  key: "totalNotifiacationSelector",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const notificationsAtomCount = get(notificationsAtom);
    const jobsAtomCount = get(jobsAtom);
    const messagingAtomCount = get(messagingAtom);
    return (
      networkAtomCount +
      notificationsAtomCount +
      messagingAtomCount +
      jobsAtomCount
    );
  },
});

//selector is similar to use memo it is used to define a function which renders only if the dependent variables defined in it changes
