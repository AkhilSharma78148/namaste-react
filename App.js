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

const restrauntList = [
    {
        name: "Burger King",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enj3srsnhbltbom2ovvh",
        place: "YamunaNagar",
        causines: ["Dal", "Roti"],
        rating: 4.3
    },
    {
        name: "Burger Singh",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv",
        place: "YamunaNagar",
        causines: ["Dal", "Rice"],
        rating: 4.3
    },
    {
        name: "KFC",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rvxp5xbniat84r6efku2",
        place: "YamunaNagar",
        causines: ["Paneer", "Roti"],
        rating: 4.3
    },
    {
        name: "Mr. King",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enj3srsnhbltbom2ovvh",
        place: "YamunaNagar",
        causines: ["Dal", "Roti"],
        rating: 4.3
    },{
        name: "Gupta King",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enj3srsnhbltbom2ovvh",
        place: "YamunaNagar",
        causines: ["Dal", "Roti"],
        rating: 4.3
    },{
        name: "MCD King",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enj3srsnhbltbom2ovvh",
        place: "YamunaNagar",
        causines: ["Dal", "Roti"],
        rating: 4.3
    },{
        name: "Star Bucks",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enj3srsnhbltbom2ovvh",
        place: "YamunaNagar",
        causines: ["Dal", "Roti"],
        rating: 4.3
    },{
        name: "Test King",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enj3srsnhbltbom2ovvh",
        place: "YamunaNagar",
        causines: ["Dal", "Roti"],
        rating: 4.3
    }
];

// const RestrauntCard = ({restaurant}) => { 
const RestrauntCard = (props) => {
    return (
        <div className="card">
            <img src={props.restaurant?.img} alt="Restraunt Img" className="restraunt-img"/>
            <h2>{props.restaurant?.name}</h2>
            <h3>{props.restaurant?.place}</h3>
            <h5>{props.restaurant?.rating}</h5>
        </div>
    )
}

//props - properties

const Body = () => {
    return (
        <div className="restraunt-list">
           <RestrauntCard restaurant={restrauntList[0]}/>
           <RestrauntCard restaurant={restrauntList[1]}/>
           <RestrauntCard restaurant={restrauntList[2]}/>
           <RestrauntCard restaurant={restrauntList[3]}/>
           <RestrauntCard restaurant={restrauntList[4]}/>
           <RestrauntCard restaurant={restrauntList[5]}/>
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