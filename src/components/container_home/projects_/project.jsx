import React from "react";
import './project.css'
import Card from './card'

const Project = () =>{
    const projects = [
        {
            id:1,
            name:"Burger-Shop",
            src:"images/project_1.png",
            demo:"https://dhanushnofficial.github.io/burger_shop/",
            github:"https://github.com/Dhanushnofficial/burger_shop.git"
        },
        {
            id:2,
            name:"Todo-List",
            src:"images/project_2.png",
            demo:"https://dhanushtitan.github.io/Beauty-of-Travel/",
            github:"https://github.com/DhanushTitan/Todo-List.git"
        },
        {
            id:3,
            name:"Happy-Meals",
            src:"images/project_3.png",
            demo:"https://dhanushnofficial.github.io/happy-meals/",
            github:"https://github.com/Dhanushnofficial/happy-meals.git"
        },
        {
            id:4,
            name:"Todo-List",
            src:"images/project_4.png",
            demo:"https://github.com/DhanushTitan/Todo-List.git",
            github:"https://dhanushtitan.github.io/Beauty-of-Travel/"
        },
       
    ]
    return(
        <div className="container_1">
            <div className="project_card">
                {
                    projects.map(project =>(
                        <Card 
                            title = {project.name}
                            img = {project.src}
                            site = {project.demo}
                            git = {project.github}
                        />
                    ))
                }
                
            </div>
        </div>
    )
}

export default Project;