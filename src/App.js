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
      <div className="row">
      <div className="col-4"></div>
      <div className="col-4">
      <div className="App">
        <table className="tablemy">
          <tbody>
            <td>
              <img src="logo.jpg" className="logo"/>
            </td>
            <td>
              MoviesDB search 
            </td>
          </tbody>
        </table>
        <input   className="form-control"  className="moviesearch" placeholder="Enter a movie name.." />
        {this.state.rows}
      </div>
      <div className="col-4"></div>
      </div>
      </div>
    );
  }
}

export default App;
