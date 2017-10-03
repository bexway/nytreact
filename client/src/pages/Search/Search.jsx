import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    API.getNewArticles()
      .then(res => {
        this.setState({ articles: res.data })
      }
      )
      .catch(err => console.log(err));
  };

    render() {
        return (
            <div>
              <p>SEARCH PAGE</p>
              <Link to={"/saved"}>Test</Link>
              {this.state.articles}
            </div>
            
        )
    }
}

export default Search;
