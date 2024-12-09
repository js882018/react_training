import React, { createContext, useReducer } from "react";

// Initial state
const initialState = {
  todos: [],
};

// Reducer function
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "REMOVE_TODO":
      return { ...state, todos: state.todos.filter((todo, i) => i !== action.payload) };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo, i) =>
          i === action.payload.index ? action.payload.updatedText : todo
        ),
      };
    default:
      return state;
  }
};

// Create context
export const TodoContext = createContext();

// TodoProvider component
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
