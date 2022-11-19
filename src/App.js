import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import MovieList from './components/MovieList/MovieList';
import Movie from './pages/MovieDetail/Movie';
import About from './pages/About/About';
import Pricing from './pages/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/Pricing" element={<Pricing />}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
