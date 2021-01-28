import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './calculator'

document.addEventListener("DOMContentLoaded", () => {
    console.log("in here")
    const reactRoot = document.getElementById("root");
    ReactDOM.render( <Calculator />, reactRoot )
})