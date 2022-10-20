import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features_redux/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
function MovieListing() {
  const movies = useSelector(getAllMovies); //getAllmovies is a selector, we could have just, instead of movies typed inline (state)=>state.movies.movies

  //console.log("movies free :", movies);
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
}

export default MovieListing;
