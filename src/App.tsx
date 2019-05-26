import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
//import './css/global.styles.css';
import HeaderComponent from "./Components/HeaderComponent";

const App: React.FC = () => {
  return (
    <Fragment>
      <HeaderComponent />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.tsx</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Fragment>
  );
}

export default App;
