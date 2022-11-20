import React from "react";
import ShelfSelect from "./ShelfSelect";

const Book = ({ Book, onChangeBookShelf, shelf }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              Book.imageLinks && Book.imageLinks.thumbnail
            })`,
          }}
        ></div>
        <ShelfSelect
          onChangeBookShelf={onChangeBookShelf}
          Book={Book}
          shelf={shelf}
        />
      </div>
      <div className="book-title">{Book.title}</div>
      <div className="book-authors">{Book.authors && Book.authors}</div>
    </div>
  );
};

export default Book;
