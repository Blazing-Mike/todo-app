import { useState } from "react";

const TodoList = ({ todos, deleteTodo, toggleTodo, clearCompleteTodos}) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="outer-container">
      <div className="todo-container">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <div className={`todo-item__container`} key={todo.id}>
              <div className="left">
                <label className="container todo-complete__checkbox">
                  <input type="checkbox" onClick={() => toggleTodo(todo.id)} />
                  <span className="checkmark"></span>
                </label>
                <li className={`todoitem ${todo.complete ? "strike" : ""}`}>
                  {todo.item}
                </li>
              </div>
              <button
                className="delete-button"
                onClick={() => deleteTodo(todo.id)}
              >
                <img src="../images/icon-cross.svg" alt="delete todo" />
              </button>
            </div>
          ))
        ) : (
          <div className="todo-container__notodo">
            <h3>No todos</h3>
          </div>
        )}
        <div className="todo-bottom">
          <div className="left">
            {todos.length > 0 ? (
              <p>{todos.length} item{todos.length > 1 ? "s" : ''} left</p>
            ) : (
              <p>No todos</p>
            )}
          </div>
          <div className="right">
            <button
              onClick={() => clearCompleteTodos(todos)}
              className="clear-todo"
            >
              clear completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
