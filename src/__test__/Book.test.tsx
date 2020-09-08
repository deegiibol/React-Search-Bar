import React from 'react';
import renderer from 'react-test-renderer';
import Book from '../components/Book';

const mockProp = {
  id: '123',
  title: 'Java',
  authors: ['Tom'],
  publisher: 'Test',
  publishDate: '2015/10/13',
  description: 'Java Core',
  pageCount: 200,
  categories: ['Java'],
  imageLinks: {
    smallThumbnail: '',
    thumbnail: '',
  },
  language: 'eng',
  addToWishlist: jest.fn(() => {}),
};

describe(`The Book Component test`, () => {
  it(`renders as expected`, () => {
    const tree = renderer.create(<Book {...mockProp} />);
    console.log(tree.toJSON());
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
