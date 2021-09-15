import {FaHtml5, FaCss3Alt, FaReact, FaGitSquare, FaNodeJs} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiMysql} from 'react-icons/si';

const fetchWiki = async (title) => {
    const url = `https://es.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&explaintext=&format=json&exintro=&exsentences=1&titles=${title}`;
    const resp = await fetch(url);
    const data = await resp.json()
    const {query:{pages}} = data;
    const id = Object.keys(pages)
    const html = pages[id].extract
    return html
}

export const getLanguages = async () =>{
    return [
        {
            title:'HTML', 
            icon: FaHtml5,
            data: await fetchWiki('HTML')
        },
        {
            title: 'Hoja_de_estilos_en_cascada',
            icon: FaCss3Alt,
            data: await fetchWiki('Hoja_de_estilos_en_cascada')
        },
        {
            title: 'JavaScript',
            icon: IoLogoJavascript,
            data: await fetchWiki('JavaScript')
        },
        {
            title: 'React',
            icon: FaReact,
            data: await fetchWiki('React')
        },
        {
            title: 'Git',
            icon: FaGitSquare,
            data: await fetchWiki('Git')
        },
        {
            title: 'Node.js',
            icon: FaNodeJs,
            data: await fetchWiki('Node.js')
        },
        {
            title: 'MySQL',
            icon: SiMysql,
            data: await fetchWiki('MySQL')
        }
    ]
}