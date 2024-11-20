import { Component } from "react";

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "To-Do List", todos: [], // Initial empty state
        };
    }

    componentDidMount() {
        const toDoListData = [
            {
                id: 1,
                name: 'Daily EASE CheckIn'
            },
            {
                id: 2,
                name: 'Sprint Sheet Update'
            },
            {
                id: 3,
                name: 'Asana Status Update'
            },
            {
                id: 4,
                name: 'Attend the Standup'
            },
            {
                id: 5,
                name: 'EASE Tracking'
            },
            {
                id: 6,
                name: 'Technical Blog Reading'
            }
        ];
        this.setState({ todos: toDoListData });
    }

    getToDoData() {
        return this.state.todos.map((data) => {
            return <p key={data.id}>{data.id}. {data.name}</p>
        })
    }

    render() {
        return (
            <>
                <div className="left">
                    <h2>{this.state.title}</h2>
                    <div>{this.getToDoData()}</div>
                </div>
            </>
        )
    }
}

export default Todo;