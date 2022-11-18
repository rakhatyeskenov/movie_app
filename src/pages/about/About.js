import React from "react";
import PropTypes from 'prop-types'
import { Outlet, Link } from "react-router-dom";

function About() {
    return <div>
        <h1>This is about page</h1>
        <button> Go to the contact page</button>
    </div>
}

export default About;
