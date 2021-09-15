import React from 'react'


export const Project = ({data}) => {
    return (
        <>
          <div className="project-card">
            <div className="project-data">
            <p>{data.title}</p>
            <p>{data.description}</p>
            </div> 
            <img alt="" className="imgProjects" src={data.img}/>
        </div>  
        </>
    )
}
