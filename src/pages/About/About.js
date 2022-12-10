import React, { useEffect, useState } from "react"
import "./About.css"
import { Link } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { useParams } from "react-router-dom"
import Cards from "../../components/Card/Card";
import Movie from "../../components/Movie/Movie";
import axios from 'axios';


class About extends React.Component {

    state = {
        isLoadingL: true,
        movies: [],
    }

    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
        this.setState({ movies, isLoading: false })
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <section>
                <div class="about">
                    <div className="about-section">
                        <h1>About Us Page</h1>
                        <p>This is our movie website</p>
                        <p>React</p>
                    </div>
                </div>
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="container_">
                        <div className="title_rcm">
                            <h1>Movies we recommend: </h1>
                        </div>
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id} 
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        )
    }
}

export default About