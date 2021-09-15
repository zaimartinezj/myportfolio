import React from 'react'

import { Languages } from './Languages.js';

export const About = ({languages}) => {

    return (
        <>
        
        <div id="about">
            <p className="title">Sobre mí 😃</p>
            <div  className='content-about'>
                <p className="text-about">
                        Mi nombre es Zaida Martinez. Tengo 23 años. Vivo en Buenos Aires, Argentina. 
                        Soy estudiante de la carrera Ingeniería de Sistemas en la Universidad Tecnologica Nacional. 
                        Desde muy pequeña me apasiona la tecnología. Hace más de un año empece a introducirme en el mundo del Desarrollo Web,
                        y estoy entusiasmada por seguir aprendiendo.
                        Estas son algunas de las tecnologías que domino en la actualidad:
                </p>

                <div className="languages">
                   <Languages languages={languages}/>
                </div>
                <a target="_blank" rel="noreferrer" className="downloadCv" href="https://drive.google.com/file/d/1wV7X70mdGrv0Pms9g4GqcYBN8UTgejXi/view?usp=sharing">Click aquí para ver mi Curriculum</a>
            </div>
        </div>
        </>
    )
}
