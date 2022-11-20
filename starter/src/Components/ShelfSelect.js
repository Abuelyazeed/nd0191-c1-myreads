import { useState } from "react";

const ShelfSelect = ({ Book, onChangeBookShelf, shelf }) => {
  const [value, setValue] = useState(shelf);
  //console.log(Book.shelf);

  const handleChange = (e) => {
    e.preventDefault();
    onChangeBookShelf(Book, e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select value={value ? value : "none"} onChange={handleChange}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ShelfSelect;
