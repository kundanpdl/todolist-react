import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    if (todo === "") {
      alert("Please enter a todo");
      return;
    }
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
