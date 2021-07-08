import React, { useState } from 'react';
import './style.scss';

import books from '../../Resources/books/books.json';
import Book from './Book';
import { Column, Row } from 'simple-flexbox';
import PageHeader from '../PageHeader';

const Bookshelf = () => {
  return (
    <Column flexGrow={1}>
      <Row>
        <PageHeader title="The Bookshelf" />
      </Row>
      <Row vertical="center">
        <Column flexGrow={1} style={{ width: '30%' }}>
          <div className="bookshelf-container">
            <div className="bookshelf">
              {books.andrew.books.map((book, i) => {
                return <Book key={i} book={book} />;
              })}
            </div>{' '}
          </div>
        </Column>
        <Column flexGrow={1} horizontal="center">
          <h3> Column 2 </h3>
          <div>details</div>
        </Column>
      </Row>
    </Column>
  );
};

export default Bookshelf;
