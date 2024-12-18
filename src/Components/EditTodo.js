import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const LOCAL_STORAGE_KEY = "todos";
const EditTodo = ({ }) => {
    const navigate = useNavigate();
    const { todoId } = useParams();
    const [title, setTitle] = useState();

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
        const todoToEdit = savedTodos.find((todo) => todo.id === Number(todoId));
        if (todoToEdit) 
            setTitle(todoToEdit.title);
    }, [Number(todoId)]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        // Update the specific TODO in localStorage
        const savedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
        const updatedTodos = savedTodos.map((todo) =>
            todo.id === Number(todoId) ? { ...todo, title } : todo
        );

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
        navigate("/todos"); // Redirect to List TODOs page
    };

    return (
        <div className="todo-container">
            <h1>Edit TODO</h1>
            <Link to="/todos">
                <button>All Todos</button>
            </Link>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );

}

export default EditTodo