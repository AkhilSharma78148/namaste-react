import React     from "react";
import ReactDOM from "react-dom/client";
import { LOGO_IMG } from "./src/utils/constants";


const AppLogo = () => (
    <a href="/">
        <img alt="logo" className="logo" src={LOGO_IMG}/>
    </a>
);

const Header = () => {
    return (
        <div className="header">
            <AppLogo />
            <div className="nav-items">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        <button>
                            Login
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <h3>Body</h3>
    )
}

const Footer = () => {
    return (
        <h5>Footer</h5>
    )
}

const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));



//passing a react element inside the root
root.render(<AppLayout/>);