import React from 'react';
import './styles/App.scss';
import BookSearch from './components/BookSearch';

function App() {
  return (
    <div>
      <header className="header">
        <div className="header--content">
          <h1>My Good Reads</h1>
        </div>
      </header>
      <main className="main-content">
        <BookSearch />
      </main>
    </div>
  );
}

export default App;
