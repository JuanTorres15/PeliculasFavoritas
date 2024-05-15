import { useEffect, useState } from "react";
import { get } from "../data/httpCliente";
import { MovieCard } from "../components/MovieCard";
import "./ContextMovieCar.css"

export function ContextMovieCard() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        get("/discover/movie").then((data) => {
            setMovies(data.results);
        });
    }, []);

    return (
        <ul className="container">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
    );
}