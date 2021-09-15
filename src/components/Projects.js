import React from 'react'
import { Project } from './Project'
import driversf1 from '../assets/driversf1.png';
import shopapp from '../assets/shopapp.png';
import soon from '../assets/soon.jpg';
import portfolio from '../assets/portfolio.png';

export const Projects = () => {
    const projects = [
        {
            title: 'Shop Web',
            description: 'Tienda de ropa. Front-end con React.JS. Back-end MERN. JWT para auth',
            status: 'In process',
            img: shopapp
        },
        {
            title: 'Drivers F1',
            description: 'Pagina con datos sobre la F1. Utilizando HTML, CSS3, Vanilla JS',
            img: driversf1
        },
        {
            title: 'Portfolio',
            description: 'Mi portfolio. Front-end React.js',
            img: portfolio
        },
        {
            title: 'Próximamente',
            description: 'Más en proceso. . .',
            img: soon
        }  
    ]

    return (
        <div id="projects">
            <p className="title">Proyectos</p>
            <div className="projectsgrid">
            {
                projects.map((project)=>
                    <Project key={project.title} data={project}/>
                )
            }
            </div>
        </div>
    )
}
