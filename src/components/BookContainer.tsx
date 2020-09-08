import { connect } from 'react-redux';
import { addToWishlist } from '../redux/actions/bookActions';
import Book from './Book';

const BookContainer = connect(null, { addToWishlist })(Book);
export default BookContainer;
