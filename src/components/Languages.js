import React, { useState } from 'react'

export const Languages = ({languages}) => {

  const [data, setData] = useState('Click en los íconos ver mas informacion')

  const handleHover = (html) => {
    setData(html)
  }
  
    return (
        <>
          {
            languages.map(
                lang=>{
                  const Component = lang.icon;
                  return (               
                      <Component 
                        onClick={()=>{handleHover(lang.data)}} 
                        className="iconLang" 
                        key={lang.title}/>
                        
                  )
              
          })
          }
          <div className="box-wiki">
            <p className="wikipedia">{data} <span className="fuente-cita"> Fuente: Wikipedia</span></p>
          </div>
        </>
          
        
    )
}
