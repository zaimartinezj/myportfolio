import React from 'react'
import {AiOutlineGithub, AiFillLinkedin} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';

export const Social = () => {

    const aStyle = {
        overflow:'hidden'
    }

    return (
        <div className="social-media">
                <a target="_blank" rel="noreferrer" style={aStyle} href="https://github.com/zaimartinezj"><AiOutlineGithub className="icon"/></a>
                <a target="_blank" rel="noreferrer" style={aStyle} href="https://www.linkedin.com/in/zaida-martinez/"><AiFillLinkedin className="icon"/></a>
                <a target="_blank" rel="noreferrer" style={aStyle} href="mailto: zaidamartinezjarse@gmail.com"><MdEmail className="icon"/></a>
        </div>
    )
}
