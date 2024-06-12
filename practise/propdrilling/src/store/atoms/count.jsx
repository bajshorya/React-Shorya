import { atom, selector } from "recoil";
export const countAtom = atom({
  key: "countAtom",
  default: 0,
});

export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {              //or(props)=>
    const count = get(countAtom);  //props.get(countAtom)
    return count % 2;
  },
});
