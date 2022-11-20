import "./App.css";
import { useState, useEffect } from "react";
import SearchPage from "./Pages/SearchPage";
import HomePage from "./Pages/HomePage";
import * as BooksAPI from "../src/BooksAPI";
import { Route, Routes } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  const changeBookShelf = (book, shelf) => {
    const newBooks = books.map((item) => {
      if (item.id === book.id) {
        item.shelf = shelf;
      }
      return item;
    });
    setBooks(newBooks);
    BooksAPI.update(book, shelf);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<HomePage Books={books} onChangeBookShelf={changeBookShelf} />}
      />

      <Route
        path="/search"
        element={
          <SearchPage Books={books} onChangeBookShelf={changeBookShelf} />
        }
      />
    </Routes>
  );
}

export default App;
