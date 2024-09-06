import React from "react";
import './about.css'
import Header from "../header/header"; 
import About from "./about";

export default function About_section(){
    const title= "About Me" 
    return(
        <div >
            <Header text={title}/>
            <About  />
            
        </div>
    )
}