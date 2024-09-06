import React  from "react";
import Avathar from './avathar/avathar'
import List from "./list/list";
import Social from './socialmedia/index'
import './home.css'


function Saidebar(){
    return(
        <div className="sidebar_container">
            <Avathar />
            <p>HELLO !!</p>
            <h1>I'm Dhanush </h1>
            <p>a Fullstack Developer</p>
            <List/>
            <Social />
        </div>
    )
}

export default Saidebar;