const mogoose = require("mongoose");
const Schema = mogoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    authors: {
        type: [String],
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }
});

const Book = mogoose.model("Book", bookSchema);

module.exports = Book;