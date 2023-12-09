import React from "react";
export default function MovieCard(props) {
    const movie1 = props.movies
  return (
    <div className="movie">
      <div>
        <p>{movie1.Year}</p>
      </div>

      <div>
        <img src={movie1.Poster} alt="Batman" />
      </div>

      <div>
        <span>{movie1.Type}</span>
        <h3>{movie1.Title}</h3>
      </div>
    </div>
  );
}
