import React, { useEffect, useState } from "react"
import "./Pricing.css"
import { Link } from "react-router-dom";

const Pricing = () => {

    return (
        <>
            <div className="container">
                <ul className="price">
                    <li className="header__ header__basic   ">Free</li>
                    <li className="grey">Free</li>
                    <li>2GB Storage</li>
                    <li>2 Emails</li>
                    <li>2 Domains</li>
                    <li>500MB Bandwidth</li>
                    <li className="grey"><a href="#" className="button">Sign Up</a></li>
                </ul>
            </div>
            <div className="container">
                <ul className="price">
                    <li className="header__ header__basic">Basic</li>
                    <li className="grey">$ 9.99 / year</li>
                    <li>10GB Storage</li>
                    <li>10 Emails</li>
                    <li>10 Domains</li>
                    <li>1GB Bandwidth</li>
                    <li className="grey"><a href="#" className="button">Sign Up</a></li>
                </ul>
            </div>
            <div className="container">
                <ul className="price">
                    <li className="header__ header__pro">Pro</li>
                    <li className="grey">$ 24.99 / year</li>
                    <li>25GB Storage</li>
                    <li>25 Emails</li>
                    <li>25 Domains</li>
                    <li>2GB Bandwidth</li>
                    <li className="grey"><a href="#" className="button">Sign Up</a></li>
                </ul>
            </div>
        </>
    )
}

export default Pricing

