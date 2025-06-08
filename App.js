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

//Functional component
const Title = () => (
    <h1 key="h1">Namaste React Main Heading</h1>
);

//
const subTitle = ( //React Element
    <h2 key="h2">Namaste React Subheading</h2>
);

//React Component
    //Class Based Component
    //Functional component

// Functional Component
const HeaderComponent = () => {
    //Also Return some piece of react element
    return (
            <div>
                <Title/> { /* Calling another component inside the component => also called as Composition/composite component  */}
                {subTitle} {/*  React Element call inside the component */}
                <h3>Namaste React Functionaly Component</h3>
            </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));



//passing a react element inside the root
root.render(<HeaderComponent/>);