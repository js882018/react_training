import { useState, useEffect } from "react";
import Todo from "./Todo";
import RandomText from "./Randomtexts";

const ParentComponent = () => {
    const [todos, setTodos] = useState([]);
    const [randomText, setRandomText] = useState("");
    const [useLocalStorage, setUseLocalStorage] = useState(true);

    useEffect(() => {
        const storage = useLocalStorage ? localStorage : sessionStorage;
        const savedTodos = JSON.parse(storage.getItem("todos")) || [];
        setTodos(savedTodos);
    }, [useLocalStorage])

    useEffect(() => {
        const storage = useLocalStorage ? localStorage : sessionStorage;
        storage.setItem("todos", JSON.stringify(todos));
    }, [todos, useLocalStorage]);

    const handleAddTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((todo, i) => i !== index);
        setTodos(updatedTodos);
    };

    const handleEditTodo = (index, updatedText) => {
        const updatedTodos = [...todos];
        updatedTodos[index] = updatedText;
        setTodos(updatedTodos);
    };

    const toggleStorage = () => {
        // const storage = useLocalStorage ? localStorage : sessionStorage;

        localStorage.removeItem("todos");
        sessionStorage.removeItem("todos");

        const newStorage = !useLocalStorage ? localStorage : sessionStorage;
        newStorage.setItem("todos", JSON.stringify(todos));

        setUseLocalStorage(!useLocalStorage);
    };

    const generateRandomText = () => {
        setRandomText(Math.random().toString(36).substring(2, 15));
    };

    return (
        <div className="parent-container">
            <h1>TODO App</h1>
            <label>
                <input className="storage"
                    type="checkbox"
                    checked={useLocalStorage}
                    onChange={toggleStorage}
                />
                Use LocalStorage
            </label>
            <RandomText
                randomText={randomText}
                onGenerateText={generateRandomText}
            />
            <Todo
                todos={todos}
                onAddTodo={handleAddTodo}
                onDeleteTodo={handleDeleteTodo}
                onEditTodo={handleEditTodo}
            />
        </div>
    )

}

export default ParentComponent;