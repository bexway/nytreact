import React, { Component } from "react";
import "./Search.css";
import API from "../../utils/API.js"

class Search extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.loadarticles();
  }

  loadarticles = () => {
    API.getArticles()
      .then(res => {
        this.setState({ articles: res.data })
      }
      )
      .catch(err => console.log(err));
  };

    render() {
        return (
            <div>
              {this.state.articles}
            </div>
            
        )
    }
}

export default Search;
