import React from 'react';
import './MovieList.css';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import Moviecart from '../moviecart/Moviecart';

const MovieList = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  // Create variables to store the list of Moviecart components
  let renderMovies = null;
  let renderShows = null;

  if (movies.Response === "True") {
    // If movies are available, map through them and render Moviecart components
    renderMovies = movies.Search.map((movie, index) => (
      <Moviecart key={index} data={movie} />
    ));
  } else {
    // If there's an error with movies, display an error message
    renderMovies = (
      <div className="movie-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  }

  if (shows.Response === "True") {
    // If shows are available, map through them and render Moviecart components
    renderShows = shows.Search.map((show, index) => (
      <Moviecart key={index} data={show} />
    ));
  } else {
    // If there's an error with shows, display an error message
    renderShows = (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  }

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {renderMovies} {/* Render the Moviecart components or error message for movies */}
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          {renderShows} {/* Render the Moviecart components or error message for shows */}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
