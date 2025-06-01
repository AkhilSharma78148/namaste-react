const heading = React.createElement(
    "h1", 
    {
        id: "title"
    },
    "Heading 1"
);

const heading2 = React.createElement(
    "h2",
    { //props
        id: "title"
    },
    "Heading 2"
);

const container = React.createElement(
    "div",
    { //props
        id: "container",
    },
    [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
root.render(container);