"use client"

import React from "react";
import NavbarLogin from "./navbar-login";
import NavbarBasic from "./navbar-basic";

const navbarmain = () => {
    // Get the value from local storage
    const userId = localStorage.getItem('session');

    // Check if the value exists
    if (userId !== null) {
        console.log('Value from local storage:', userId);
        return (<NavbarLogin></NavbarLogin>);
    } else {
        console.log('Value not found in local storage');
        return (<NavbarBasic></NavbarBasic>);
    }
}

export default navbarmain;