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

const restrauntObj = {
    name: "Burger King",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enj3srsnhbltbom2ovvh",
    place: "YamunaNagar",
    causines: ["Dal", "Roti"],
    rating: 4.3
}

const RestrauntCard = () => {
    return (
        <div className="card">
            <img src={restrauntObj.img} alt="Restraunt Img" className="restraunt-img"/>
            <h2>{restrauntObj.name}</h2>
            <h3>{restrauntObj.place}</h3>
            <h3>{restrauntObj.causines.join(", ")}</h3>
            <h5>{restrauntObj.rating}</h5>
        </div>
    )
}

const Body = () => {
    return (
        <div className="restraunt-list">
           <RestrauntCard />
           <RestrauntCard />
           <RestrauntCard />
           <RestrauntCard />
           <RestrauntCard />
           <RestrauntCard />
           <RestrauntCard />
           <RestrauntCard />
           <RestrauntCard />
           <RestrauntCard />
        </div>
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
root.render(<AppLayout />);