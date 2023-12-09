import "./App.css";
import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import SearchIcon from "./Search.svg";

export default function App() {
  //436d57e6 -> API KEY
  const [movies, setMovies] = useState([]);
  const [search, setSeacrh] = useState("");
  const API_URl = "http://www.omdbapi.com/?i=tt3896198&apikey=436d57e6";

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URl}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman"); // Default movie set to Batman
  }, []);

  return (
    <div className="app">
      <h1>MovieEmpire</h1>

      <div className="search">
        <input
          placeholder="search"
          value={search}
          type="text"
          onChange={(e) => setSeacrh(e.target.value)}
        />

        <img
          src={SearchIcon}
          alt="There was supposed to be an image here"
          onClick={() => searchMovies(search)}
        />
      </div>

      <div className="container">
        {movies.map((movie)=>(
            <MovieCard movies={movie} />
        ))}
      </div>
    </div>
  );
}
