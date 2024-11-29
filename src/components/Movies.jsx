import React, { Component, useEffect, useState } from 'react';

class MovieGallery extends Component   {
  state={ movies: [],Loading: true, Error:null,}


 
     fetchMovies = async () => {
      try {
       
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ba341c2b&s=`+this.props.film);
        const data = await response.json();
        if (data.Response === "True") {
          this.setState({
            movies: data.Search,
            Loading: false,
            Error: false,
          })
        } else {
          this.setState({ Loading: false, Error: true });
        }
      } catch (err) {
        this.setState({ Loading: false, Error: true });
      } 
    };
    componentDidMount() {
      this.fetchMovies()
    }
  
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  render(){
  return (
    <div className="my-4">
      <h4>{this.props.film}</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6">
        {this.state.movies.map((movie) => (
          <div className="col mb-2 text-center px-1" key={movie.imdbID}>
            <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  )};
}


export default MovieGallery;
