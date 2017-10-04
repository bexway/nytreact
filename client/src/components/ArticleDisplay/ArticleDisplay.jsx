import React from "react";
import "./ArticleDisplay.css";

const Article = (props) =>
  <div>
    {props.articles.map(article =>
      <div class="searched-article">
        <a href={article.web_url}>
          <p>{article.headline.main}</p>
          </a>
      </div>
    )}    
  </div>;

export default Article;
