import React from 'react';
import { ThemeContext, ThemeProvider } from './ThemeContext';
import ThemeChanger from './ThemeChanger';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({theme}) => (
          <div className="App">
          <header className="App-header" style={{'backgroundColor': theme.background}}>
            <img src={logo} className="App-logo" alt="logo" />
            <p style={{'color': theme.foreground}}>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <div>
              <ThemeChanger/>
            </div>
          </header>
        </div>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}

export default App;
