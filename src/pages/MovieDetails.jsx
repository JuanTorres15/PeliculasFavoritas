import "./MovieDetail.css"
import { useParams } from "react-router-dom";
import { get } from "../data/httpCliente";
import { useEffect, useState } from "react";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieDetail() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const [generos, setGeneros] = useState([])

    useEffect(() => {
        setLoading(true); // Inicia cargando
        get("/movie/" + movieId).then((data) => {
            setMovie(data);
            setGeneros(data.genres[0])
            setLoading(false);
        }).catch((error) => {
            setLoading(false); 
        });
    }, [movieId]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (!movie) {
        return <div>No se encontraron datos de la película</div>;
    }

    const imageUrl = getMovieImg(movie.poster_path, 300);

    return (
        <div className="detailsContainer">
            <img className="ImageDetail" src={imageUrl} alt={movie.title} />
            <p>
                <strong className="Titulos">Título:  </strong>
                {movie.title}
            </p>
            <p>
                <strong className="Titulos">Género:  </strong>
                {generos.name}
            </p>
            <p>
                <strong className="Titulos">Descripción:  </strong>
                {movie.overview}
            </p>
        </div>
    );
}