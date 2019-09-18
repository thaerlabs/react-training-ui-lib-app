import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'demo-ui-library/lib/Button';
import logo from './logo.svg';
import './App.css';

const tajawalTheme = {
  primary: 'tomato',
  secondary: 'white'
}

const almosaferTheme = {
  primary: 'red',
  secondary: 'yellow'
}



function App() {
  return (
    <ThemeProvider theme={tajawalTheme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button onClick={() => {
            console.log('The button was clicked 👍')
          }}>
            Learn React
          </Button>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
