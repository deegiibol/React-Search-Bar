import React, { Component } from 'react';
import Book from './Book';
import { IBook } from './Models';

interface PropType {
  books: IBook[];
}

class BookList extends Component<PropType> {
  render() {
    const bookList = this.props.books.map((book) => (
      <Book key={book.id} {...book} />
    ));
    return <div className="booklist">{bookList}</div>;
  }
}

export default BookList;
