import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  title: String,
});
const BookList = mongoose.model("Books", bookSchema);

export default BookList;
