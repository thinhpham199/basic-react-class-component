import React from "react";
import './Demo.scss'

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleDelete = (job) => {
        this.props.deleteJob(job)
    }

    render() {
        // let name = this.props.name
        // let age = this.props.age
        let { arrJobs } = this.props
        let { showJobs } = this.state

        return (
            <>
                {!showJobs &&
                    <div>
                        <button
                            className="btn-show"
                            onClick={this.handleShowHide}
                        >
                            Show
                        </button>
                    </div>
                }
                {showJobs &&
                    <>
                        <div className="job-list">
                            {arrJobs.map((item) => {
                                return (
                                    <React.Fragment key={item.id}>
                                        <div>
                                            {item.title} - Salary: ${item.salary}<></>
                                            <span onClick={() => this.handleDelete(item.id)}>❌</span>
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                        <div><button onClick={this.handleShowHide}>Hide</button></div>
                    </>
                }

            </>
        )
    }
}

export default ChildComponent