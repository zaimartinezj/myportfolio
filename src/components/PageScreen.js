import React, { useEffect, useRef, useState } from 'react'
import { getLanguages } from '../helpers/fetchData'
import { About } from './About'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { Header } from './Header'
import { Projects } from './Projects'
import { Welcome } from './Welcome'
import {FaArrowUp} from 'react-icons/fa';
import background from '../assets/background.jpg';

export const PageScreen = () => {

    const languages = useRef([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getLanguages().then((data)=>{
            languages.current = data
            setLoading(false)
        
        })
        
    })

    const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  if (loading){
    return <div className="loading"><div className="loader"></div></div>
  }


    return (
        <>
            
            <img src={background} id="bg" alt=""/>
            <FaArrowUp className={visible ? "button-scrollback" : "hidden"} onClick={scrollToTop} />
            <Header/>
            <Welcome/>

            
            <div className="page-content">  
                <About languages={languages.current}/>
                <Projects/>
                <Contact/>
            </div>
            
            <Footer/>
        </>
    )
}