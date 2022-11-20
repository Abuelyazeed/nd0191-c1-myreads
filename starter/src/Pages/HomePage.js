import React from "react";
import BookShelf from "../Components/BookShelf";
import { Link } from "react-router-dom";

const HomePage = ({ Books, onChangeBookShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf
          shelfTitle="Currently Reading"
          Books={Books}
          shelf={"currentlyReading"}
          onChangeBookShelf={onChangeBookShelf}
        />
        <BookShelf
          shelfTitle="Want To Read"
          Books={Books}
          shelf={"wantToRead"}
          onChangeBookShelf={onChangeBookShelf}
        />
        <BookShelf
          shelfTitle="Read"
          Books={Books}
          shelf={"read"}
          onChangeBookShelf={onChangeBookShelf}
        />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default HomePage;
