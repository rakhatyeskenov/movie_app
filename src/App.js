import React from "react";
import { PropTypes } from "prop-types";
import axios from 'axios'
import Movie from "./components/Movie/Movie";
import "./App.css";
import About from "./pages/about/About";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";

class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  }

  if (setGoToContact) {
      return <Navigate to="src/pages/about/About.js"></Navigate>
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
    <Link to="src/pages/about/About.js"></Link>
  }


  render() {
    const { isLoading, movies } = this.state;
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="src/pages/about/About.js" Component={About}>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            <div class="cl1">
              <button >Trendings</button>
              <button onClick={() => {
                this.navigate("src/pages/about/About.js")
              }}>About</button>
              <button >Contacts</button>
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

    );
  }
}

export default App;

