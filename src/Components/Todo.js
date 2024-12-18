import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LOCAL_STORAGE_KEY = "todos";
const Todo = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
        if (savedTodos) {
            setTodos(savedTodos);
        }
    }, [])

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    };

    return (
        <div className="todo-container">
            <h1>TODO List</h1>
            <Link to="/todos/add">
                <button>Add New TODO</button>
            </Link>
            <ul>
                {todos.length === 0 ? (
                    <p>No TODOs found. Add some!</p>
                ) : (
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span
                                style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                            >
                                {todo.title}
                            </span>
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            <Link to={`/todos/edit/${todo.id}`}>
                                <button>Edit</button>
                            </Link>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );

}
export default Todo