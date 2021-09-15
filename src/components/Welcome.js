import React from 'react'
import foto from '../assets/foto.jpg';
import svgwave from '../assets/wave.svg';

export const Welcome = () => {

    return (
        <>
        <div className="welcome">
            <div className="container-img">
                <div className="sombra"></div>
                <img className="myphoto" src={ foto } alt="myphoto" width="200" height="200"></img>
            </div>
            <div className="text-welcome">            
                <p className="title welcome-title">Bienvenid@! 👋</p>
                <p>Mi nombre es Zaida. Soy Desarrolladora Web.</p>
                <p>Me encanta la tecnología y programar. Siempre en busqueda de nuevos desafíos.</p>
           </div> 
            
        </div>
        <img className="wave" src={svgwave} alt="wave"/>
        </>
    )
}
