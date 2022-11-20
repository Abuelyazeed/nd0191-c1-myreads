import React from "react";
import Book from "./Book";

const BookShelf = ({ shelfTitle, Books, shelf, onChangeBookShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {Books.filter((book) => book.shelf === shelf).map((book) => (
            <li key={book.id}>
              <Book
                Book={book}
                onChangeBookShelf={onChangeBookShelf}
                shelf={shelf}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
