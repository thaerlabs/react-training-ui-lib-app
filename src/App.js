import React from 'react';
import Button from 'demo-ui-library/lib/Button';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
