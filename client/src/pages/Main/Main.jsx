import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./../../components/Header"

class Main extends Component {
  state = {
  };

    render() {
        return (
            <div className="container">
                <Header></Header>
            </div>
        )
    }
}

export default Main;