import React, { useState } from "react";

const Todo = ({ todos, onAddTodo, onDeleteTodo, onEditTodo }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleInputChange = (event) => {
        setNewTodo(event.target.value);
    };

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            onAddTodo(newTodo);
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
                    onChange={handleInputChange}
                    placeholder="Add a new TODO"
                />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span>{todo}</span>
                        <button onClick={() => onDeleteTodo(index)}>Delete</button>
                        <button
                            onClick={() => {
                                const updatedText = prompt("Edit TODO:", todo);
                                if (updatedText) onEditTodo(index, updatedText);
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