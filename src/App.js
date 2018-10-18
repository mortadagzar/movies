import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor (props){
super(props);

}
  render() {

    return (
      <div className="row">
      <div className="col-lg-2 col-md-4 col-sm-4 wing" ></div>
      <div className="col-lg-8 col-md-4 col-sm-4 wing">
      <div className="App">
        <table className="tablemy">
          <tbody>
            <td>
              <img src="logo.jpg" className="logo"/>
            </td>
            <td className="title">
              MoviesDB SeaR<span className="span1">H</span>
            </td>
          </tbody>
        </table>
        <input     className="moviesearch" placeholder="Enter a movie name.." />
      </div>
     
    
      </div>
      <div className="col-lg-2 col-md-4 col-sm-4 wing"></div>
     
      <div className="col-lg-2 col-md-4 col-sm-4 " ></div>
      <div className="col-lg-8 col-md-4 col-sm-4 " >
      <p>{this.state.rows}</p>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-4 " ></div>


      
      </div>
       
    );
  }
}

export default App;
