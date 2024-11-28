import { Component } from "react";
import Todo from "./Todo";
import RandomText from "./Randomtexts";

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            randomText: "",
            useLocalStorage: true,
        };
    }

    componentDidMount() {
        const storage = this.state.useLocalStorage ? localStorage : sessionStorage;
        const savedTodos = JSON.parse(storage.getItem("todos")) || [];
        this.setState({ todos: savedTodos });
    }

    handleAddTodo = (todo) => {
        const updatedTodos = [...this.state.todos, todo];
        this.setState({ todos: updatedTodos }, this.updateStorage);
    };

    handleDeleteTodo = (index) => {
        const updatedTodos = [...this.state.todos];
        updatedTodos.splice(index, 1);
        this.setState({ todos: updatedTodos }, this.updateStorage);
    };

    handleEditTodo = (index, updatedText) => {
        const updatedTodos = [...this.state.todos];
        updatedTodos[index] = updatedText;
        this.setState({ todos: updatedTodos }, this.updateStorage);
    };

    updateStorage = () => {
        const storage = this.state.useLocalStorage ? localStorage : sessionStorage;
        storage.setItem("todos", JSON.stringify(this.state.todos));
    };

    toggleStorage = () => {
        const newStoragePreference = !this.state.useLocalStorage;
        const currentTodos = [...this.state.todos];

        // Clear current storage and move todos to the new storage
        localStorage.removeItem("todos");
        sessionStorage.removeItem("todos");

        const newStorage = newStoragePreference ? localStorage : sessionStorage;
        newStorage.setItem("todos", JSON.stringify(currentTodos));

        this.setState({ useLocalStorage: newStoragePreference });
    };

    generateRandomText = () => {
        const randomText = Math.random().toString(36).substring(2, 15);
        this.setState({ randomText });
    };

    render() {
        return (
            <div className="parent-container">
                <h1>TODO App</h1>
                <label>
                    <input className="storage"
                        type="checkbox"
                        checked={this.state.useLocalStorage}
                        onChange={this.toggleStorage}
                    />
                    Use LocalStorage
                </label>
                <RandomText
                    randomText={this.state.randomText}
                    onGenerateText={this.generateRandomText}
                />
                <Todo
                    todos={this.state.todos}
                    onAddTodo={this.handleAddTodo}
                    onDeleteTodo={this.handleDeleteTodo}
                    onEditTodo={this.handleEditTodo}
                />
            </div>
        );
    }

}

export default ParentComponent;