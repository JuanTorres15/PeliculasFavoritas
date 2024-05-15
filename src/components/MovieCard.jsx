import "../components/MovieCard.css"
import { Link } from "react-router-dom"


export function MovieCard({ movie }) {

    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return (
        <li className="MovieCard">
            <Link to={"/movies/"+movie.id}>
                <img className="MovieImg" src={imageUrl} alt={movie.title} />
            </Link>
            <div>
                    <h2>{movie.title}</h2>
            </div>
        </li>
    );
}