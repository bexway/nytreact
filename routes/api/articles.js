const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/")
 .get(articlesController.findAll)//route for retrieving all saved articles from db
 .post(articlesController.saveArticle) //route for for adding saved articles to db
 .delete(articlesController.deleteArticle); //route for deleting saved articles from db

module.exports = router;
