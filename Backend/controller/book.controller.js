import BookList from "../model/book.model.js";

const getBook = async (req, res) => {
  try {
    const book = await BookList.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error in route: ", error);
    res.status(500).json(error);
  }
};
export { getBook };
