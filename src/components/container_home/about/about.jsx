import React from "react";
import './about.css';

const About = () =>{
    return(
        <div className="container_1">
            <h1 className="main_head">Hello! I Am <samp>Dhanush</samp>,</h1>
            <p className="main_para">Welcome to my portfolio!  Full-stack developer creates attractive, responsive websites.</p>
            <p className="about_para_1">I am a Bsc Computer Science student at St. Joseph's College in Tiruchirappalli,
                 with a CGPA of 8. I specialize in full-stack development, creating user-friendly
                  online apps and managing complex software systems. I am committed to constant learning
                   and remain up to speed on the newest technological advancements.
            </p>
            <div className="about_card">
                <img src="images/IMG_0570 2.JPG" className="about_img" alt="image not found"/>
                <div className="about_card_alignment">
                    <h1 className="about_card_h1">Qualification :-</h1>
                    <p className="about_card_p1">St. Joseph's College in Tiruchirappalli</p>
                    <p className="about_card_p2">Bsc Computer Scienec </p>
                    <p className="about_card_p3">CGPA : 8.0</p>
                    <p className="about_card_p1">St. Joseph's College in Tiruchirappalli</p>
                    <p className="about_card_p2">Hsc</p>
                    <p className="about_card_p3">percentage : 84.5%</p>
                    <p className="about_card_p1">St. Joseph's College in Tiruchirappalli</p>
                    <p className="about_card_p2">SSLC</p>
                    <p className="about_card_p3">percentage : 80%</p>
                </div>
            </div>
           
            <p className="about_para_1">I think that user-centered design is critical for producing great products because it focuses on 
                the wants and goals of the user, resulting in designs that are intuitive, engaging, and effective.
                 I enjoy iterating a lot since it helps me to strive for excellence, and I am constantly searching for
                  new challenges and opportunities to improve as a designer, having one year of hands-on experience with
                   certain projects at internship,  
            </p>
        </div>
    )
}

export default About;