const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// Add a new book
router.post('/', async (req, res) => {
  try {
    const { title, author, description, price, imageUrl } = req.body;

    if (!title || !author || !description || !price || !imageUrl) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newBook = new Book({ title, author, description, price, imageUrl });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add book', error: error.message });
  }
});

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch books', error: error.message });
  }
});

// Update a book
router.put('/:id', async (req, res) => {
  try {
    const { title, author, description, price, imageUrl } = req.body;

    if (!title || !author || !description || !price || !imageUrl) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, description, price, imageUrl },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update book', error: error.message });
  }
});

// Delete a book
router.delete('/:id', async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);

    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete book', error: error.message });
  }
});

module.exports = router;
