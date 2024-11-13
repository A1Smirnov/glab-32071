// ./src/App.js

// !!! NOTE ADD apiKey

// App.js
// import dotenv from 'dotenv';
// dotenv.config();
import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";


// Accessing API key from .env
const apiKey = process.env.REACT_APP_OMDB_API_KEY;

// console.log("API Key:", process.env.REACT_APP_OMDB_API_KEY); 

export default function App() {
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(searchTerm)}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

//TEST
console.log("API Key:", apiKey);

