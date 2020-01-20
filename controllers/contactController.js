const db = require("../models");

// Defining methods for the booksController
module.exports = {
  create: function(req, res) {
    db.Contact
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};