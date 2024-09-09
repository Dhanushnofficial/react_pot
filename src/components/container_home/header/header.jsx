import React from "react";
import './header.css'
import Navbar from "./navbar/navbar";


const Header = (props) =>{
    return(
        <div className="home_container">
            <div>
                <h1>{props.text}</h1>
            </div>
            <Navbar />
            
        </div>

    )
}
export default Header
// App.js

