import React from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom"

function Navigation() {
    const [goToAbout, setGoToContact] = React.useState(false)


    
    if (setGoToContact) {
        return <Navigate to="src/pages/about/About.js"></Navigate>
    }

    return (
        <div>Hi

            <button onClick={() => {
                setGoToContact(true);
            }}>About
            </button>
        </div>
    );
}

export default Navigation;