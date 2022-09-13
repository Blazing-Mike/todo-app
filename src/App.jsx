import react, { useState, useEffect} from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodo";
import Footer from "./components/Footer";

const App = () => {
  const reference =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz#*()";
  const randomString = () => {
    let randomString = "";
    for (let i = 0; i < 10; i++) {
      randomString += reference[Math.floor(Math.random() * reference.length)];
    }
    return randomString;
  };
  const todosData = [
    { id: 1, item: "wash the car" },
    { id: 4, item: "wash the car" },
    { id: 3, item: "wash the car" },
    { id: 2, item: "wash the car" },
    { id: 5, item: "wash the car" },
  ];

  const [todos, setTodos] = useState(todosData);

  const initialTodoState = { id: null, item: "" };

  const addTodo = (todo) => {
    todo.id = randomString();
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.complete = !todo.complete;
        }
        return todo;
      })
    );
  };

  const clearCompleteTodos = (todos) => {
    setTodos(todos.filter((todo) => todo.complete !== true));
  };


  return (
    <>
      <Header />
      <AddTodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        clearCompleteTodos={clearCompleteTodos}
      />
      <Footer/>
    </>
  );
};

export default App;
