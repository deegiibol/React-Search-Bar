import React from 'react';
import { BookProps } from './Models';

const Book = (props: BookProps) => {
  const addBookToWishlist = () => {
    props.addToWishlist(props);
  };

  return (
    <div className="book" onClick={() => addBookToWishlist()}>
      <div className="thumbnail">
        <img src={props.imageLinks.smallThumbnail} alt="Imange not found" />
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

export default Book;
