import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, description, price, imageUrl };

    axios
      .post("http://localhost:5000/api/books", newBook)
      .then(() => {
        alert("Book added successfully!");
        setTitle("");
        setAuthor("");
        setDescription("");
        setPrice("");
        setImageUrl("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Add a New Book</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mt-4 md:p-9">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          required></textarea>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          required
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
