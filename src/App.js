import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  hide = () => {
    document.querySelector('.sidebar').style.width = '5%';
  }
  render() {

    return (
      <div className="sidebar">
        <h1>Sidebar</h1>
        <button id="button" onClick={this.hide} >HIDE</button>
      </div >
    );
  }


}

export default App;
