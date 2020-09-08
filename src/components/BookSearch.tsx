/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { getBooksByType } from './book-search.service';
import BookList from './BookList';
import ReadingWishList from './ReadingWishlist';
import { IBook } from './Models';
import { useDebounce } from '../shared/debounce';

function getRefinedBooks(items: any[]): IBook[] {
  return items.map((item) => ({
    id: item.id,
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors,
    publisher: item.volumeInfo.publisher,
    publishDate: item.volumeInfo.publishedDate,
    description: item.volumeInfo.description,
    pageCount: item.volumeInfo.pageCount,
    categories: item.volumeInfo.categories,
    imageLinks: {
      smallThumbnail: item.volumeInfo.imageLinks.smallThumbnail || '',
      thumbnail: item.volumeInfo.imageLinks.thumbnail,
    },
    language: item.language,
  }));
}

const BookSearch = () => {
  const [debouncedBooktype, bookType, updateBookType] = useDebounce('', 500);
  const [allAvailableBooks, setAllAvailableBooks] = useState([]);

  async function requestBooks() {
    if (bookType) {
      const allBooks = await getBooksByType(bookType);
      setAllAvailableBooks(allBooks.items);
    } else {
      setAllAvailableBooks([]);
    }
  }

  useEffect(() => {
    async function getAllBooks() {
      await requestBooks();
    }
    getAllBooks();
  }, [debouncedBooktype]);

  return (
    <>
      <div className="container-search">
        <form>
          <input
            className="full-width"
            autoFocus
            name="gsearch"
            type="search"
            value={bookType}
            placeholder="Search for books to add to your reading list and press Enter"
            onChange={(e) => {
              e.preventDefault();
              updateBookType(e.target.value);
            }}
          />
        </form>
        {!bookType && (
          <div className="empty">
            <p>
              Try searching for a topic, for example
              <a onClick={() => updateBookType('Javascript')}>"Javascript"</a>
            </p>
          </div>
        )}
        {allAvailableBooks && allAvailableBooks.length > 0 && (
          <BookList books={getRefinedBooks(allAvailableBooks)} />
        )}
      </div>
      <div className="container-wishlist">
        <ReadingWishList />
      </div>
    </>
  );
};

export default BookSearch;
