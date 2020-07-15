const { Book } = require('../models');

exports.list = async function list(req, res) {
  try {
      const books = await Book.find({});
      res.json(books);
  } catch (e) {
      res.status(500);
  }
};

exports.add = async function add(req, res) {
    const book = await Book.create(req.body);
    res.json(book);
};

exports.remove = async function remove(req, res) {
    const { _id } = req.params;
    await Book.deleteOne({ _id });
    res.json({ _id });
};