Name: Movie Website in React

Team:
1) Yeskenov Rakhat
2) Kydyrmoldin Sultan


This modules need to be installed:

1) npm install axios
2) npm i react-router-dom
3) npm install react-responsive-carousel

npm start


Description:
1) In the header you can go in different 6 pages
2) You can click on movie image and see card of this movie
3) API has been taken from: https://www.themoviedb.org/

We covered all steps(What we did): 

1. At least 4 pages (Rakhat)
Pages: Home, Popular, Top Rated, Will Be Soon, About, Pricing

2. Components, Props (Rakhat)
Components: Card, Context, Header, Movie, MovieList
Props(In the Movie component): id, year, title, summary, poster, genres

3. Components, State (Sultan)
States(Almost in all components): isLoading, movies: [], popularMovies, movieList, currentMovieDetail

4. Lifecycle methods (Sultan)
Almost in all components we: Initialized states, retrieved data and displayed it.

5. API Requests (Rakhat)
API we took from https://www.themoviedb.org/ with additional keys. 
Used fetch ans axios.

6. Hooks (Rakhat)
useEffect(), useState(), useParams()

7. Navigation (Sultan)
Used Router to navigate between pages. See App.js

8. Context System (Rakhat, Sultan)
Made very simple login just to demonstrate context system. 
Used createContext, if in Home page will login, in every page this will be updated.
See UserContext.js, App.js and in Home.js click login and check 
if every page updated if it logged in or not.


