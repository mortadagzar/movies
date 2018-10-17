import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <table className="tablemy">
          <tbody>
            <td>
              <img src="logo.jpg" width="50"/>
            </td>
            <td>
              MoviesDB search 
            </td>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
