import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor (props){
super(props);
this.state={rows:[<p>hello it is row</p>,
<p>hello it is row</p>,
<p>hello it is row</p>,]} 

 

 const movies=[
{id:0,poster_src:'https://image.tmdb.org/t/p/w370_and_h556_bestv2/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg',title:"venom",overview:'When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego “Venom” to save his life.'},
{id:1,poster_src:'https://image.tmdb.org/t/p/w370_and_h556_bestv2/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',title:'a star is porn',overview:'Seasoned musician Jackson Maine discovers—and falls in love with—struggling artist Ally. She has just about given up on her dream to make it big as a singer—until Jack coaxes her into the spotlight. But even as…'},
{ide:2,poster_src:'https://image.tmdb.org/t/p/w370_and_h556_bestv2/wMq9kQXTeQCHUZOG4fAe5cAxyUA.jpg',title:'the predator',overview:'From the outer reaches of space to the small-town streets of suburbia, the hunt comes home. Now, the universe’s most lethal hunters are stronger, smarter and deadlier than ever before, having genetically upgraded…'},


 ]

var movieRaw=[];
movies.forEach(movies => {
  const moviess=<table>
    <tbody>
      <tr>
            <td>
            
            <img   className="post" src={movies.poster_src}/>
            </td>
            <td>
            <h4>{movies.title}</h4>
            <p>{movies.overview}</p>

            </td>
     </tr>
  </tbody>
  </table>
  movieRaw.push(moviess)
});
this.state={rows:movieRaw}

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
