import React from "react";
import ReactDOM from "react-dom/client";

//JSX ?? Is a HTML like syntax but it is not HTML inside javascript
//JSX => React.createElement => Object => HTML rendere as (DOM)
//Using Bables -> JSX code into React.createElement 
const heading4 = ( //JSX expression
    <h1 id="title" key="h4">
        Namaste React Heading
    </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));



//passing a react element inside the root
root.render(heading4);