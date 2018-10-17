import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      rows:<h1>this is row</h1>
    }
  }
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
        <input  className="moviesearch" placeholder="Enter a movie name.." />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
