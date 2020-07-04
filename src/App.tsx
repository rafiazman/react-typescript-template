import React from 'react';
import logo from './logo.svg';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React TypeScript Template</p>
        <a
          className="App-link"
          href="https://github.com/rafiazman/react-typescript-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source
        </a>
      </header>
    </div>
  );
};

export default App;
