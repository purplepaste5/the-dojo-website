import React from 'react';
import './style.scss';

const Book = ({ book, onHover, onClick }) => {
  const { name, author } = book;
  return (
    <div className="book book-green">
      <div className="book-text">
        {name}
        <div>{author ? author : ''}</div>
      </div>
    </div>
  );
};

export default Book;
