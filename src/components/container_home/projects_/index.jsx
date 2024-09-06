import React from "react";

import Header from "../header/header"; 
import Project from "./project";

function Project_section(){
    const title= "Project" 
    return(
        <div >
            <Header text={title}/>
            <Project />            
        </div>
    )
}

export default Project_section;