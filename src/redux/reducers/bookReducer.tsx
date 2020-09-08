import { ADD_TO_WISHLIST } from '../actions/actionTypes';
import { IBook } from '../../components/Models';

const initialState: { [id: string]: IBook } = {};

export default function wishlistReducer(
  state = initialState,
  action: { type: string; book: IBook }
) {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      if (state.hasOwnProperty(action.book.id)) {
        return state;
      } else {
        return { ...state, [action.book.id]: action.book };
      }
    default:
      return state;
  }
}
