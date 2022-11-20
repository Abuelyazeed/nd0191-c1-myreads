//import React, { useState } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "../Components/Book";

const SearchPage = ({ Books, onChangeBookShelf }) => {
  const [query, setQuery] = useState("");

  const [searchBooks, setSearchBooks] = useState([]);

  const searchBooksFunc = async (query) => {
    setQuery(query);

    if (query) {
      const res = await BooksAPI.search(query);
      if (res.length > 0) {
        setSearchBooks(res);
      } else {
        setSearchBooks([]);
      }
    } else {
      setSearchBooks([]);
    }
  };

  const newSearchBooks = searchBooks.map((item) => {
    Books.map((item2) => {
      if (item.id === item2.id) {
        item.shelf = item2.shelf;
      }
      return item2;
    });
    return item;
  });

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={query}
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => searchBooksFunc(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>

      <ol className="books-grid">
        {newSearchBooks.map((book) => (
          <li key={book.id}>
            <Book
              Book={book}
              onChangeBookShelf={onChangeBookShelf}
              shelf={book.shelf}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SearchPage;
