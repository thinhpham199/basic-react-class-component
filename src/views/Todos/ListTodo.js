import React from "react";
import AddTodo from "./AddTodo";
import "./ListTodo.scss"
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: '1', title: 'Eating' },
            { id: '2', title: 'Sleeping' },
            { id: '3', title: 'Playing' }
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Add successfully!")
    }
    deleteTodo = (todo) => {
        console.log(todo)
        let currentTodo = [...this.state.listTodos]
        currentTodo = currentTodo.filter(item => item.id !== todo)
        this.setState({
            listTodos: currentTodo
        })
        toast.success("Delete successfully!")
    }
    clickEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        //Save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosClone = [...listTodos]
            let todoIndex = listTodosClone.findIndex((item => item.id === todo.id))
            listTodosClone[todoIndex].title = editTodo.title
            this.setState({
                listTodos: listTodosClone,
                editTodo: {}
            })
            toast.success('Update successfully')
            return
        }
        //Edit
        this.setState({
            editTodo: todo
        })
        // console.log(todo)
    }
    handleEditTodo = (e) => {
        let editTodoClone = { ...this.state.editTodo }
        editTodoClone.title = e.target.value
        this.setState({
            editTodo: editTodoClone
        })
    }

    render() {
        let { listTodos, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        console.log('Check empty object: ', isEmptyObj)

        return (
            <div className="list-todo-container">
                <h1>To Do List</h1>
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div
                                    className="todo-child"
                                    key={item.id}
                                >
                                    {isEmptyObj ?
                                        (<span>{index + 1} - {item.title}   </span>)
                                        :
                                        (<>
                                            {editTodo.id === item.id ?
                                                (<span>
                                                    {index + 1} - <input
                                                        value={editTodo.title}
                                                        onChange={this.handleEditTodo}
                                                    />
                                                </span>)
                                                :
                                                (<span>{index + 1} - {item.title}   </span>)
                                            }
                                        </>)
                                    }
                                    <button
                                        className="btn-edit"
                                        onClick={() => this.clickEditTodo(item)}
                                    >
                                        {!isEmptyObj && editTodo.id === item.id ? '💾 Save' : '🖊️ Edit'}
                                    </button>
                                    <button
                                        className="btn-delete"
                                        onClick={() => this.deleteTodo(item.id)}
                                    >
                                        🗑️ Delete
                                    </button>
                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}


export default ListTodo