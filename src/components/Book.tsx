import React from 'react';
import { connect } from 'react-redux';
import { addToWishlist } from '../redux/actions/bookActions';
import { IBook } from './Models';

const Book = (props: BookProps) => {
  const addBookToWishlist = () => {
    props.addToWishlist(props);
  };

  return (
    <div className="book" onClick={() => addBookToWishlist()}>
      <div className="thumbnail">
        <img src={props.imageLinks.smallThumbnail} />
      </div>
      <div className="description">
        <h3>{props.title}</h3>
        <h5>
          <span>Author: {props.authors}</span>
        </h5>
        <span>
          Published: {props.publisher} /{props.publishDate}/
        </span>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

interface BookProps extends IBook {
  addToWishlist(book: IBook): void;
}

export default connect(null, { addToWishlist })(Book);
