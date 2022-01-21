import React from "react";
import { withRouter } from "react-router";

class Home extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todo')
        }, 3000);
    }

    render() {
        console.log('Check Props', this.props);
        return (<h1>Home Page</h1>)
    }
}

export default withRouter(Home)