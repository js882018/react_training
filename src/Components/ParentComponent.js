import React from "react";
import { TodoProvider } from "../Context/TodoContext";
import Todo from "./Todo";
import Randomtexts from "./Randomtexts";

const App = () => {
  return (
    <TodoProvider>
      <div>
        <h1>TODO Application</h1>
        <Randomtexts />
        <Todo />
      </div>
    </TodoProvider>
  );
};

export default App;
