import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LOCAL_STORAGE_KEY = "todos";
const AddTodo = ({ }) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        const newTodo = { id: Date.now(), title, completed: false };

        // Load existing TODOs, add the new one, and update localStorage
        const savedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
        const updatedTodos = [...savedTodos, newTodo];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));

        navigate("/todos"); // Redirect to List TODOs page
    };

    return (
        <div className="todo-container">
            <h1>Add TODO</h1>
            <Link to="/todos">
                <button>All Todos</button>
            </Link>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter TODO"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );

}

export default AddTodo