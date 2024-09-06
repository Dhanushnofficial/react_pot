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

// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
//        // Adjust based on actual location
// import About_section from '../about/index';   // Ensure file exists
// import Skills_section from '../skills/index'; // Ensure file exists
// import Project from '../projects_/index';     // Ensure file exists


// const Header_section = () => {
//     return (
//         <BrowserRouter>
//              <ul>
//                 <li><Link to='/about'>About Me</Link></li>
//                 <li><Link to='/skills'>Skills</Link></li>
//                 <li><Link to='/projects'>Projects</Link></li>
//                 {/* <li><Link to='/contact'>Get in Touch</Link></li> */}
//             </ul>
//             <Routes>
//                 <Route path='/' element={<About_section />} />
//                 <Route path='/skills' element={<Skills_section />} />
//                 <Route path='/projects' element={<Project />} />
               
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default Header_section;
