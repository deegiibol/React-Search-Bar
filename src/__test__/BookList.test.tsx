import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BookList from '../components/BookList';

const mockBooks = [
  {
    id: '001',
    title: 'Java',
    authors: ['Tom'],
    publisher: 'Oracle',
    publishDate: '2015/10/13',
    description: 'Java Core',
    pageCount: 200,
    categories: ['Java'],
    imageLinks: {
      smallThumbnail: '',
      thumbnail: '',
    },
    language: 'eng',
  },
  {
    id: '002',
    title: 'ReactJS',
    authors: ['Henry'],
    publisher: 'Facebook',
    publishDate: '2018/01/25',
    description: 'ReactJS for Beginners',
    pageCount: 180,
    categories: ['JavaScript'],
    imageLinks: {
      smallThumbnail: '',
      thumbnail: '',
    },
    language: 'eng',
  },
];

Enzyme.configure({ adapter: new Adapter() });

describe(`The BookList component test`, () => {
  it(`Should snapshot match`, () => {
    const wrapper = shallow(<BookList books={mockBooks} />);
    expect(wrapper).toMatchSnapshot();
  });

  it(`Must have 2 child components`, () => {
    const wrapper = shallow(<BookList books={mockBooks} />);
    expect(wrapper.children.length).toBe(1);
  });
});
