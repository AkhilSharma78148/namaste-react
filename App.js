/**
 * Created A Server (http://localhost:1234/)
 * Parcel do following for us:-
 * HMR - Hot Module Replacement 
 * File Watcher Algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our code
 * Super Fast build Algorithm
 * Image Optimization
 * Caching while development
 * Compatable with older version of browser
 * HTTPS on dev (cmd is:- npx parcel index.html --https)
 * Manage the Port Number (auto generate port number)
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree Shaking - removing un-wanted code
 * 
 * 
 * 
 * 
 * Transitive Dependencies
 * 
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1", 
    {   //props
        id: "title",
        key: "h1"
    },
    "Heading 1 for parcel"
);

//React.createElemt -> returns object -> HTML (DOM)

const heading2 = React.createElement(
    "h2",
    { //props
        id: "title",
        key: "h2"
    },
    "Heading 2"
);

const container = React.createElement(
    "div",
    { //props
        id: "container",
        hello: "world"
    },
    [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX ?? Is a HTML like syntax but it is not HTML inside javascript
const heading4 = (
    <h1 id="title" key="h4">
        Namaste React Heading
    </h1>
);

//passing a react element inside the root
root.render(heading4);