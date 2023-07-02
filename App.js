import React from "react";
import  ReactDOM  from "react-dom/client";


const Header = () => {
    return(
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent-2048x2048.png" alt="err" />
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
    )
}

const Body = () => {
    return(
        <div className="body-container">
            <div className="search">
            search
            </div>
            <div className="res-container">
            <div className="res-cards">
                //Restaurantcard
            </div>
            </div>
        </div>
    )
}

const AppLayout = () => {
       return(
        <div className="App">
            <Header/>
            <Body/>
        </div>
       )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);