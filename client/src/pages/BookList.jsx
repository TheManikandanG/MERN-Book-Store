import React, { useState, useEffect } from "react";
import axios from "axios";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [updatedBook, setUpdatedBook] = useState({
    title: "",
    author: "",
    description: "",
    price: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const startEdit = (book) => {
    setEditingBook(book);
    setUpdatedBook({
      title: book.title,
      author: book.author,
      description: book.description,
      price: book.price,
      imageUrl: book.imageUrl,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBook({ ...updatedBook, [name]: value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put(
        `http://localhost:5000/api/books/${editingBook._id}`,
        updatedBook
      );
      if (response.status === 200) {
        setEditingBook(null);
        fetchBooks();
      } else {
        console.error("Error updating book:", response.data);
      }
    } catch (error) {
      console.error("Error updating book:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteBook = async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await axios.delete(`http://localhost:5000/api/books/${id}`);
        fetchBooks();
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Book List
      </h1>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            <img
              src={book.imageUrl}
              alt={book.title}
              className="w-full h-48 object-cover rounded-lg mb-4 transition duration-500 ease-in-out"
            />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {book.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-200 mb-2">
              Author: {book.author}
            </p>
            <p className="text-gray-600 dark:text-gray-200 mb-4">
              {book.description.length > 100
                ? book.description.slice(0, 100) + "..."
                : book.description}
            </p>
            <div className="flex justify-between items-center gap-4">
              <button
                onClick={() => startEdit(book)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none transition duration-300"
              >
                Edit
              </button>
              <div><h2 className="text-xl font-semibold text-gray-800 dark:text-white">₹{book.price}</h2></div>
              <button
                onClick={() => deleteBook(book._id)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <form
            onSubmit={handleEditSubmit}
            className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Edit Book
            </h2>

            <label className="block mb-4">
              Title:
              <input
                type="text"
                name="title"
                value={updatedBook.title}
                onChange={handleInputChange}
                className="block w-full text-black p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </label>

            <label className="block mb-4">
              Author:
              <input
                type="text"
                name="author"
                value={updatedBook.author}
                onChange={handleInputChange}
                className="block w-full text-black p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </label>

            <label className="block mb-4">
              Description:
              <textarea
                name="description"
                value={updatedBook.description}
                onChange={handleInputChange}
                className="block w-full text-black p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </label>

            <label className="block mb-4">
              Price:
              <input
                type="number"
                name="price"
                value={updatedBook.price}
                onChange={handleInputChange}
                className="block w-full text-black p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </label>

            <label className="block mb-4">
              Image URL:
              <input
                type="text"
                name="imageUrl"
                value={updatedBook.imageUrl}
                onChange={handleInputChange}
                className="block w-full text-black p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </label>

            <div className="flex justify-between mt-6">
              <button
                type="submit"
                className={`px-4 py-2 bg-green-600 text-white rounded-lg focus:outline-none hover:bg-green-700 transition duration-300 ${
                  loading && "opacity-50 cursor-not-allowed"
                }`}
                disabled={loading}
              >
                {loading ? "Updating..." : "Update"}
              </button>
              <button
                type="button"
                onClick={() => setEditingBook(null)}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none transition duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default BookList;
