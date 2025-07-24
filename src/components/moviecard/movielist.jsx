import React from "react";

export function DemoList(){
return (
  <div>
    <h2>Demo Movie List</h2>
    <ul>
      <li>Movie 1</li>
      <li>Movie 2</li>
      <li>Movie 3</li>
    </ul>
  </div>
);
}

function MovieList({ movie }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-poster"
      />
      <div className="movie-details">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-rating">Rating: {movie.vote_average}</p>
      </div>
    </div>
  );
}

export default MovieList;
