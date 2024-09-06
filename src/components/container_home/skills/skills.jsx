import React from "react";
import './skills.css';
import Card from './card';

const Skills = () => {
    const skills = [
        {
            id: 1,
            src: "images/html.png",
            title: 'HTML',
        },
        {
            id: 2,
            src: "images/css.png",
            title: 'CSS',
        },
        {
            id: 3,
            src: "images/js.png",
            title: 'JS',
        },
        {
            id: 4,
            src: "images/react.png",
            title: 'React.js',
        },
        {
            id: 5,
            src: "images/node.png",
            title: 'Node.js',
        },
        {
            id: 6,
            src: "images/express.png",
            title: 'Express.js',
        },
        {
            id: 7,
            src: "images/mongo.png",
            title: 'MongoDB',
        },
        {
            id: 8,
            src: "images/python.png",
            title: 'Python',
        },
        {
            id: 9,
            src: "images/figma.png",
            title: 'Figma',
        },
        {
            id: 10,
            src: "images/github.png",
            title: 'GitHub',
        },
        {
            id: 11,
            src: "images/flask.png",
            title: 'Flask',
        },
    ];

    return (
        <div className="container_1">
            <p className="skills_p1">What I do</p>
            <p className="skills_h1"> The tools I use to build the projects </p>
            <div className="skills_card_bg">
                {skills.map(skill => (
                    <Card 
                        key={skill.id} 
                        title={skill.title}
                        img={skill.src}
                    />
                ))}
            </div>
        </div>
    );
}

export default Skills;
