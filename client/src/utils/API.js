import axios from "axios";

export default {
  getNewArticles: function() {
    return axios.get("/api/saved");
  },
  getSavedArticles: function() {
    return axios.get("/api/saved");
  }
  //TODO: post and delete on saved articles route
};