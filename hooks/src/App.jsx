import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function useTodos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
    });
  }, []);
  return todos;
}
function App() {
  const todos = useTodos();
  return (
    <>
      <div>
        {todos.map((todo) => (
          <Track todo={todo} />
        ))}
      </div>
    </>
  );
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
