import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {

    state = {
        title: ''
    }

    handleInput = (e) => {
        this.setState({
            title: e.target.value
        })
        console.log(e.target.value)
    }
    handleAddTodo = () => {
        if (!this.state.title) {
            toast.error('Missing input!')
            return
        }
        let todo = {
            id: Math.trunc(Math.random() * 1000),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state
        return (
            <div className="add-todo">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => this.handleInput(e)}
                />
                <button
                    type="button"
                    onClick={this.handleAddTodo}
                >
                    📝 Add
                </button>
            </div>
        )
    }
}

export default AddTodo