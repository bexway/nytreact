const db = require("../models");

// Defining methods for the controller
module.exports = {
    findAll: (req, res) => {
        db.Article
        .find()
        .then(result => res.json(result))
        .catch(err => res.json(err));
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
