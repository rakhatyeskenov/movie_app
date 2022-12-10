import React, { useContext, useEffect, useState } from "react"
import "./Pricing.css"
import { Link } from "react-router-dom";
import { UserContext } from "../../components/Context/UserContext";

const Pricing = () => {

    const {user} = useContext(UserContext);

    return (
        <>
        <div className="login__wrap">
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>  
            <div className="container">
                <ul className="price">
                    <li className="header__ header__basic   ">Free</li>
                    <li className="grey">Free</li>
                    <li className="li__">2GB Storage</li>
                    <li className="li__">2 Emails</li>
                    <li className="li__">2 Domains</li>
                    <li className="li__">500MB Bandwidth</li>
                    <li className="grey"><a href="#" className="button">Sign Up</a></li>
                </ul>
            </div>
            <div className="container">
                <ul className="price">
                    <li className="header__ header__basic">Basic</li>
                    <li className="grey">$ 9.99 / year</li>
                    <li className="li__">10GB Storage</li>
                    <li className="li__">10 Emails</li>
                    <li className="li__">10 Domains</li>
                    <li className="li__">1GB Bandwidth</li>
                    <li className="grey"><a href="#" className="button">Sign Up</a></li>
                </ul>
            </div>
            <div className="container">
                <ul className="price">
                    <li className="header__ header__pro">Pro</li>
                    <li className="grey">$ 24.99 / year</li>
                    <li className="li__">25GB Storage</li>
                    <li className="li__">25 Emails</li>
                    <li className="li__">25 Domains</li>
                    <li className="li__">2GB Bandwidth</li>
                    <li className="grey"><a href="#" className="button">Sign Up</a></li>
                </ul>
            </div>
        </>
    )
}

export default Pricing

