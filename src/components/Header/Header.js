import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/" style={{textDecoration: "none"}}><span>Home</span></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Will Be Soon</span></Link>
                <Link to="/about" style={{textDecoration: "none"}}><span>About</span></Link>
                <Link to="/pricing" style={{textDecoration: "none"}}><span>Pricing</span></Link>
            </div>
        </div>
    )
}

export default Header