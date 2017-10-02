import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./../../components/Header";
import Search from "./../Search";

class Main extends Component {
  state = {
  };

    render() {
        return (
            <div className="container">
                <Header />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Search} />
                        <Route component={Search} />
                    </Switch>
                </Router>
            </div>
            
        )
    }
}

export default Main;