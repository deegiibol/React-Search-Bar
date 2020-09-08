import React from 'react';
import { connect } from 'react-redux';
import { IBook } from './Models';

const ReadingWishList = (props: WishlistProps) => {
  const wishlist = Object.values(props.books).map((book, index) => (
    <div key={book.id}>
      {index + 1}. {book.title}
    </div>
  ));
  const count = props.books.length;
  return (
    <>
      <h3>My Reading Wishlist ({count})</h3>
      <div>{wishlist}</div>
    </>
  );
};

function mapStateToProps(state: WishlistState) {
  return {
    books: state.wishlist,
  };
}

interface WishlistState {
  wishlist: { [id: string]: IBook };
}

interface WishlistProps {
  books: { [id: string]: IBook };
}

export default connect(mapStateToProps)(ReadingWishList);
