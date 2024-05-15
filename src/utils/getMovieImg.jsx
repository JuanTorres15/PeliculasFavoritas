import palomitas from "../img/palomitas.png"


export function getMovieImg(path,width){
    return path? `https://image.tmdb.org/t/p/w${width}${path}`: palomitas;

    
}
