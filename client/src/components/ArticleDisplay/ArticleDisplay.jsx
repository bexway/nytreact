import React from "react";
import "./ArticleDisplay.css";

const saveButton = (handleFunction) => {
  if(handleFunction){
    return <button onClick={handleFunction}>
          Save Article
        </button>
  }
  return
}

const processDate = (article) => {
  let date = new Date(article.pub_date || article.date);
  return date.toString();
}

const ArticleDisplay = (props) =>
  <div>
    {props.articles.map(article =>
      <div className="searched-article">
        <a href={article.web_url||article.url}>
          <p>{article.headline.main||article.headline}</p>
        </a>
        <p>{processDate(article)}</p>
        {saveButton(props.handleArticleSave)}
      </div>
    )}    
  </div>;

export default ArticleDisplay;
