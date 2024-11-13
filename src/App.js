// ./src/App.js


import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

// Accessing API key from .env
const apiKey = process.env.REACT_APP_OMDB_API_KEY;

// Bonus: implement function of quasirandom movie at start
const getRandomMovie = async () => {
  try {
    // Try to look up everything constisting "movie"
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=movie`
    );
    const data = await response.json();

    if (data.Response === "True") {
      // Randomly
      const randomMovie =
        data.Search[Math.floor(Math.random() * data.Search.length)];

      // Request to get all info about movies
      // NOTE!!! Don't forget to renew the view in MovieDisplay!!!
      const movieDetailsResponse = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(
          randomMovie.Title
        )}`
      );
      const movieDetails = await movieDetailsResponse.json();
      return movieDetails;
    } else {
      console.error("Error fetching movie data:", data.Error);
    }
  } catch (e) {
    console.error("Failed to fetch movie:", e);
  }
};

export default function App() {
  const [movie, setMovie] = useState(null);

  // Basic search function
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

  // Using useEffect, to load quasirandom movie from list
  useEffect(() => {
    const fetchRandomMovie = async () => {
      const randomMovieDetails = await getRandomMovie();
      setMovie(randomMovieDetails);
    };

    fetchRandomMovie();
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}


