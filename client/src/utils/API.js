import axios from "axios";
//TODO: replace this with heroku config
import authKey from "./apikey"

var baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

export default {
  getNewArticles: function(query, begin, end) {
    let queryURL = baseURL + `?api-key=${authKey}`;
    if(query){
      queryURL += `&q=${query.trim()}`
    }
    if(begin){
      queryURL += `&begin_date=${begin.replace(/-/g, "")}`
    }
    if(end){
      queryURL += `&end_date=${end.replace(/-/g, "")}`
    }
    return axios.get(queryURL);
  },
  getSavedArticles: function() {
    return axios.get("/api/saved");
  }
  //TODO: post and delete on saved articles route
};