import React, { Component } from "react";
import "./Saved.css";
import API from "../../utils/API.js"
import ArticleDisplay from "../../components/ArticleDisplay"

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
        console.log(res)
        this.setState({ articles: res.data })
      })
      .catch(err => console.log(err));
  };

  deletearticle = (id) => {
    API.deleteArticle(id)
  }

  handleArticleDelete = event => {
    let id = "test"
    this.savearticle(id);
  }

  render() {
      return (
          <div>
            <p>SAVED PAGE</p>
            <ArticleDisplay articles={this.state.articles}  handleFunction={this.handleArticleDelete} operation="Delete" />
          </div>
      )
  }
}

export default Saved;
