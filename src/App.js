// ./src/App.js

import { useState, useEffect } from "react";
import "./App.css";

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  return (
    <div className="App">
      <Form />
      <MovieDisplay />
    </div>
  );
}
