const db = require("../models");

// Defining methods for the controller
module.exports = {
    findAll: (req, res) => {
        res.json("test")
    },
    saveArticle: (req, res) => {
        db.Article
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
    },
    deleteArticle: (req, res) => {
        res.json("test")
    }
};
