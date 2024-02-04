import MovieCard from "./MovieCard";

const WatchList = (props) => {
    const movieDisplay = props.list.map((movie, index) => {
        return <MovieCard movie={movie} list={props.list} removeMovie={props.removeMovie} />;
    })

    return (
        <div className="watchlist">
            <h1>My Watchlist</h1>
            <div className="movie-container"> {movieDisplay} </div>
        </div>
    )
};

export default WatchList;