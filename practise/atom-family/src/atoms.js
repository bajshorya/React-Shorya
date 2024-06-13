import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: (id) => {
    // find is a specific function similar to map or filter ,lets you find a specic value which follows a specific constraint
    // return TODOS.find((x) => x.id === id);

    let foundTodo = null;
    for (let i = 0; i < TODOS.length; i++) {
      if (TODOS[i].id === id) {
        foundTodo = TODOS[i];
      }
    }
    return foundTodo;
  },
});
