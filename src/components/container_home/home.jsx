import React from "react";
import './home.css'
import About_section from './about/index'
import Project_section from "./projects_/index";
import Skills from "./skills/index";


export default function Container_home(){
     
    return(
        <div className="home_card">
            <About_section/>
            <Project_section/>
            <Skills />
        </div>
    )
}