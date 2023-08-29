import { useState } from "react";
import NewTodo from "./components/Newtodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    console.log("🙌 remove item!");
    console.log("😂 todoId: ", todoId);
    setTodos((prevTodos) => {
      const newArray = prevTodos.filter((item) => item.text !== todoId);
      return newArray;
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
