import React, { Component } from 'react';
import VersionsListContainer from './components/versionsPage/versionsListContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div> */}
        {/*<p className="App-intro">*/}
          <VersionsListContainer name="Yonatan"/>
        {/*</p>*/}
      </div>
    );
  }
}

export default App;