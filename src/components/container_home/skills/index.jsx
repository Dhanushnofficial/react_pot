import React from "react";

import Header from "../header/header"; 
import Skills from "./skills";

export default function About_section(){
    const title= "Skills" 
    return(
        <div >
            <Header text={title}/>
            <Skills  />
            
        </div>
    )
}