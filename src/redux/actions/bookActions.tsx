import { ADD_TO_WISHLIST } from './actionTypes';
import { IBook } from '../../components/Models';

export function addToWishlist(book: IBook) {
  return { type: ADD_TO_WISHLIST, book };
}
