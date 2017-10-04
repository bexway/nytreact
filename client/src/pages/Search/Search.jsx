import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Search.css";
import API from "../../utils/API.js"
import ArticleDisplay from "../../components/ArticleDisplay"
import QueryForm from "../../components/QueryForm"

class Search extends Component {
  state = {
    articles: [],
    query: "",
    startDate: "",
    endDate: "",
  };

  componentDidMount() {
    this.loadarticles();
  }

  loadarticles = () => {
    API.getNewArticles(this.state.query, this.state.startDate, this.state.endDate)
      .then(res => {
        console.log(res.data.response.docs)
        this.setState({ articles: res.data.response.docs })
      }
      )
      .catch(err => console.log(err));
  };

  //When typing input into forms, update the state based on whatever key event happened
  handleInputChange = event => {
    console.log(event.target)
    if(event.target.name === "search-query"){
      this.setState({ query : event.target.value });
    }
    else if(event.target.name === "search-start"){
      this.setState({ startDate : event.target.value });
    }
    else if(event.target.name === "search-end"){
      this.setState({ endDate : event.target.value });
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.loadarticles();
  };

  render() {
      return (
          <div>
            <p>SEARCH PAGE</p>
            <Link to={"/saved"}>saved</Link>
            <div>
              <QueryForm 
                search={this.state.query}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
              <ArticleDisplay articles={this.state.articles} />
            </div>
          </div>
          
      )
  }
}

export default Search;
