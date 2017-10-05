import React from "react";
import "./ArticleDisplay.css";

const ArticleDisplay = (props) =>
  <div>
    {props.articles.map(article =>
      <div className="searched-article">
        <a href={article.web_url}>
          <p>{article.headline.main}</p>
        </a>
        <p>{Date(article.pub_date)}</p>
        <button onClick={props.handleArticleSave}>
          Save Article
        </button>
      </div>
    )}    
  </div>;

export default ArticleDisplay;
