const router = require("express").Router();
const booksController = require("../../controllers/contactController");

// Matches with "/api/contact"
router.route("/")
  .post(booksController.create);

module.exports = router;