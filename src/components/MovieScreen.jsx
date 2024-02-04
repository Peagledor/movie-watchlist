import MovieCard from "./MovieCard";

const MovieScreen = (props) => {
  const removeMovie = props.remove;
  const addMovie = props.addMovie;
  const list = props.list;
  const setPage = props.setPage;
  const page = props.page;
  const movieList = props.movieList;

  const decrement = () => page !== 1 && setPage(page - 1);
  const increment = () => setPage(page + 1);

  const movieDisplay = movieList.map((movie, index) => {
    return (
      <MovieCard
        movie={movie}
        addMovie={addMovie}
        remove={removeMovie}
        list={list}
      />
    );
  });

  return (
    <div className="page">
      <h1>Jorge's Movie Theater</h1>
      <h3>Add a movie to your watchlist</h3>
      <div className="btn-container">
        <button onClick={decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
