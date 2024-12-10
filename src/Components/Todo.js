import React, { useState, useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

const Todo = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState("");

  const validateTodo = () => {
    if (!newTodo.trim()) {
      setError("TODO text cannot be empty.");
      return false;
    }
    if (newTodo.trim().length < 3) {
      setError("TODO text must be at least 3 characters long.");
      return false;
    }
    setError("");
    return true;
  };

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (validateTodo()) {
      dispatch({ type: "ADD_TODO", payload: newTodo.trim() });
      setNewTodo("");
    }
  };

  return (
    <div>
      <h2>TODO List</h2>
      <form onSubmit={handleAddTodo}>
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            placeholder="Add a new TODO"
          />
          <button type="submit" className="btn-add">
            Add
          </button>
        </div>
        {error && (
          <p className="error">
            {error}
          </p>
        )}
      </form>
      <ul>
        {state.todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              borderBottom: "1px solid #eee",
            }}
          >
            <span>{todo}</span>
            <div>
              <button onClick={() => dispatch({ type: "REMOVE_TODO", payload: index })}>
                Delete
              </button>
              <button
                onClick={() => {
                  const updatedText = prompt("Edit TODO:", todo);
                  if (updatedText) {
                    dispatch({
                      type: "UPDATE_TODO",
                      payload: { index, updatedText: updatedText.trim() },
                    });
                  }
                }}>
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
