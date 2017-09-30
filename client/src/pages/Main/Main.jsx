import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class Main extends Component {
  state = {
  };

  componentDidMount() {
    //On mount, run calls to retrieve saved articles
  }

  //write functions to retrieve saved articles and run queries

  // carried over from example project
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    //On form submit, run search query to retrieve top 6 article results
  };

  render() {
    return (
      <div>Hello world!</div>
    );
  }
}

export default Main;
