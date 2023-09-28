"use client"

import React, { useEffect, useState } from "react";
import NavbarLogin from "./navbar-login";
import NavbarBasic from "./navbar-basic";

const Navbarmain = () => {
    // Define a state variable to determine which component to render
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Get the value from local storage
        const userId = localStorage.getItem('session');

        // Check if the value exists
        if (userId !== null) {
            console.log('Value from local storage:', userId);
            // Set the state variable to true if the value exists
            setIsLoggedIn(true);
        } else {
            console.log('Value not found in local storage');
            // Set the state variable to false if the value doesn't exist
            setIsLoggedIn(false);
        }
    }, []);

    return (
        <div>
            {isLoggedIn ? <NavbarLogin /> : <NavbarBasic />}
        </div>
    );
}

export default Navbarmain;