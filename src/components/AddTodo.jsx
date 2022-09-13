import React, { useState } from "react";
import "../styles/addtodo.scss";

const AddTodoForm = ({ addTodo }) => {
    const initialFormState = { id: null, item: ''}
    const [todo, setTodo] = useState({...initialFormState});

        
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value })
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        if (!todo.item) return
        addTodo(todo)
        setTodo(initialFormState)
      }

  return (
    <div className="add-todo__container">
      <form
        className="add-todo__form"
        onSubmit={handleSubmit}
      >
        <input type="text" name="item" value={todo.item} placeholder="Add Todo" className="add-todo__input" onChange={handleInputChange} />
      </form>
    </div>
  );
};

export default AddTodoForm;
