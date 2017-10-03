import React, { Component } from "react";
import "./Saved.css";
import API from "../../utils/API.js"

class Saved extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.loadarticles();
  }

  loadarticles = () => {
    API.getSavedArticles()
      .then(res => {
        this.setState({ articles: res.data })
      }
      )
      .catch(err => console.log(err));
  };

    render() {
        return (
            <div>
              <p>SAVED PAGE</p>
              {this.state.articles}
            </div>
            
        )
    }
}

export default Saved;
