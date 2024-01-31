// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";

function App() {
  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
  const [movieList, setMovieList] = useState([]);
  const [list, setlist] = useState([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          List={list} 
          Page={page}
          setPage={setPage}
          MovieList={movieList}
        />
      </main>
    </div>
  );
}

export default App;
