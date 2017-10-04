import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Search.css";
import API from "../../utils/API.js"
import ArticleDisplay from "../../components/ArticleDisplay"

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
        console.log(res.data.response.docs)
        this.setState({ articles: res.data.response.docs })
      }
      )
      .catch(err => console.log(err));
  };

    render() {
        return (
            <div>
              <p>SEARCH PAGE</p>
              <Link to={"/saved"}>saved</Link>
              <div>
                <ArticleDisplay articles={this.state.articles} />
              </div>
            </div>
            
        )
    }
}

export default Search;
