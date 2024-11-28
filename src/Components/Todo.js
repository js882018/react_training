import { Component } from "react";

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { newTodo: "" };
    }

    handleInputChange = (e) => {
        this.setState({ newTodo: e.target.value });
    };

    handleAddTodo = () => {
        if (this.state.newTodo.trim() !== "") {
            this.props.onAddTodo(this.state.newTodo);
            this.setState({ newTodo: "" });
        }
    };

    render() {
        const { todos, onDeleteTodo, onEditTodo } = this.props;
        return (
            <div>
                <h2>TODO List</h2>
                <div>
                    <input
                        type="text"
                        value={this.state.newTodo}
                        onChange={this.handleInputChange}
                        placeholder="New TODO"
                    />
                    <button onClick={this.handleAddTodo}>Add</button>
                </div>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            <span>{todo}</span>
                            <button onClick={() => onDeleteTodo(index)}>Delete</button>
                            <button
                                onClick={() => {
                                    const updatedText = prompt("Edit TODO:", todo);
                                    if (updatedText)
                                        onEditTodo(index, updatedText);
                                }}>
                                Edit
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Todo;