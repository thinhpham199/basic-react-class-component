import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

class Navigation extends React.Component {

    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                <NavLink to="/example">Example</NavLink>
                <NavLink to="/todo">Todo App</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        )
    }
}

export default Navigation