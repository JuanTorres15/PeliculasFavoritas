import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LandingPage } from "../pages/LandingPage"
import { MovieDetail } from "../pages/MovieDetails"

export function MyRoutes(){

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage/>}/>
                <Route exact path="/movies/:movieId" element={<MovieDetail/>}/>
            </Routes>
        </Router>
    )

}