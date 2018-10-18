import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
class App extends Component {
  
  constructor (props){
super(props);

this.state=[];




this.performSearch();
}

performSearch (){
 
const urlString="https://api.themoviedb.org/3/search/movie?api_key=61890ecf5074b59cb0742c1a193dbf28&language=en-US&query=movie%20db&page=1&include_adult=false";


$.ajax({
  url:urlString,
  success: (searchResults)=>{
    const results=searchResults.results
   

    var movieRaws=[];
    results.forEach((movie)=> {
       const movies={movie}
      movieRaws.push(movie)
    });
    this.setState({movie:movieRaws})
},

  error:(xhr,status,error)=>{
  
}



})

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
      <div>

        const moviess=<table key={this.props.movies.id}>
    <tbody>
      <tr>
            <td>
            
            <img   className="post" src={movie.poster_src}/>
            </td>
            <td>
            <h4>{movie.title}</h4>
            <p>{movie.overview}</p>

            </td>
     </tr>
  </tbody>
  </table>
    </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-4 " ></div>


      
      </div>
       
    );
  }
}

export default App;
