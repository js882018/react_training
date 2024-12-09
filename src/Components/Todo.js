import React, { useState, useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

const Todo = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setNewTodo("");
    }
  };

  return (
    <div>
      <h2>TODO List</h2>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new TODO"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            <span>{todo}</span>
            <button onClick={() => dispatch({ type: "REMOVE_TODO", payload: index })}>
              Delete
            </button>
            <button
              onClick={() => {
                const updatedText = prompt("Edit TODO:", todo);
                if (updatedText) {
                  dispatch({
                    type: "UPDATE_TODO",
                    payload: { index, updatedText },
                  });
                }
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
