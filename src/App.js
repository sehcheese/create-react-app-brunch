import React, { Component } from 'react';
import * as appStyles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={appStyles["App"]}>
        <div className={appStyles["App-header"]}>
          <img src="./logo.svg" className={appStyles["App-logo"]} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <p className={appStyles["App-intro"]}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
