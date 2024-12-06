import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import BookList from "./pages/BookList";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
          <Navbar />
          <main className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-book" element={<AddBook />} />
              <Route path="/book-list" element={<BookList />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
