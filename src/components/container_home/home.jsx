import React from "react";
import './home.css'
import About_section from './about/index'
import Project_section from "./projects_/index";
import Skills from "./skills/index";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


export default function Container_home(){
     
    return(
        <div className="home_card">
            {/* <About_section/>
            <Project_section/>
            <Skills /> */}
            <BrowserRouter>
             <ul>
               <li><Link to='/'>About Me</Link></li>
                 <li><Link to='/skills'>Skills</Link></li>
                 <li><Link to='/projects'>Projects</Link></li>
                
             </ul>
             <Routes>
                 <Route path='/' element={<About_section />} />
                 <Route path='/skills' element={<Skills />} />
                 <Route path='/projects' element={<Project_section />} />
               
             </Routes>
         </BrowserRouter>

        </div>
    )
}