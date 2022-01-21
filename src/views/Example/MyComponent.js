import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: '1', title: 'Dev', salary: '1000' },
            { id: '2', title: 'Test', salary: '800' },
            { id: '3', title: 'BA', salary: '1200' }
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    deleteJob = (job) => {
        let currentJobs = [...this.state.arrJobs]
        currentJobs = currentJobs.filter(item => item.id !== job)
        this.setState({
            arrJobs: currentJobs
        })
    }


    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate: ', 'previous state: ', prevState, 'current state: ', this.state)
    }
    componentDidMount() {           //call API
        console.log('componentDidMount')
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponent