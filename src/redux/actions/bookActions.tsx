import { ADD_TO_WISHLIST } from './actionTypes';
import { IBook } from '../../book-search/Models';

export function addToWishlist(book: IBook) {
  return { type: ADD_TO_WISHLIST, book };
}
