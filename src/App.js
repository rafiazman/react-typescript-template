import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>React Template</p>
                <a
                    className="App-link"
                    href="https://github.com/Matteas-Eden/react-template"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Source
                </a>
            </header>
        </div>
    );
}

export default App;
