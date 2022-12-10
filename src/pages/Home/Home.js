import React, { useContext, useEffect, useState } from "react"
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { UserContext } from "../../components/Context/UserContext"
import { login } from "../../login";

const Home = () => {

    const [popularMovies, setPopularMovies] = useState([])

    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])

    function cleanIt(obj) {
        let json_user = JSON.stringify(user, null, 2);
    
        return json_user.replace(/^[\t ]*"[^:\n\r]+(?<!\\)":/gm, function (match) {
            return match.replace(/"/g, "");
        });
    }

    let json_user = JSON.stringify(user, null, 2);
    let json_user_upd = cleanIt(json_user);
  
    return (
        <>
            <div className="poster">
                <div className="login__wrap">
                    <h3>Account:</h3>
                    <pre>{json_user_upd}</pre>
                    {user ? <button className="btn__log" onClick={() => {
                        // logout
                        setUser(null);
                    }}>logout</button> : <button className="btn__log"
                        onClick={async () => {
                            const user = await login();
                            setUser(user);
                        }}
                    >
                        Login
                    </button>}
                </div>
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                    useKeyboardArrows
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average : ""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList />
            </div>
        </>
    )
}

export default Home