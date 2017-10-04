import axios from "axios";
//TODO: replace this with heroku config
import authKey from "./apikey"

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey;

export default {
  getNewArticles: function() {
    return axios.get(queryURL);
  },
  getSavedArticles: function() {
    return axios.get("/api/saved");
  }
  //TODO: post and delete on saved articles route
};