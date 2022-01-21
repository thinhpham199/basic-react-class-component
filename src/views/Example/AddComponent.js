import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handleChangeTitleJob = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleChangeSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('Please enter job and salary')
            return
        }
        console.log('Check Input: ', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form>
                <label>Job Title</label><br />
                <input
                    type='text'
                    value={this.state.title}
                    onChange={(e) => this.handleChangeTitleJob(e)}
                />
                <br />
                <label>Salary</label><br />
                <input
                    type='text'
                    value={this.state.salary}
                    onChange={(e) => this.handleChangeSalary(e)}
                />
                <br />
                <button
                    onClick={(e) => this.handleSubmit(e)}
                >
                    Submit
                </button>
            </form>)
    }
}

export default AddComponent