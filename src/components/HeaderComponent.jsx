import { useState } from 'react'
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"

import './HeaderComponent.css'


export default function HeaderComponent() {

    const skillsData = [
        { icon: './icons/reacticon.png', alt: 'Icone React.js', name: 'React' },
        { icon: './icons/nextjsicon.png', alt: 'Icone Next.js', name: 'Next.js' },
        { icon: './icons/jsicon.png', alt: 'Icone JavaScript', name: 'JavaScript' },
        { icon: './icons/tailwindicon.png', alt: 'Icone TailWind', name: 'Tailwind' },
        { icon: './icons/giticon.png', alt: 'Icone Git', name: 'Git' },
        { icon: './icons/htmlicon.png', alt: 'Icone HTML5', name: 'HTML5' },
        { icon: './icons/cssicon.png', alt: 'Icone CSS', name: 'CSS' },
        { icon: './icons/nodejsicon.png', alt: 'Icone Node.js', name: 'Node.js' },
        { icon: './icons/figmaicon.svg', alt: 'Icone Figma', name: 'Figma' },
        { icon: './icons/stiledcomponenticon.png', alt: 'Icone StiledComponent', name: 'StiledComponent' },
        { icon: './icons/firebaseicon.png', alt: 'Icone Firebase', name: 'Firebase' },
        { icon: './icons/mysqlicon.png', alt: 'Icone MySQL', name: 'MySQL' },
        { icon: './icons/dockericon.png', alt: 'Icone Docker', name: 'Docker' },
        { icon: './icons/mongodbicon.png', alt: 'Icone MongoDB', name: 'MongoDB' },
    ]

    const [skillName, setSkillName] = useState('')

    return (
        <header className='headerComponent' id='home'>
            <div className='headerComponent-apresentation'>

                <h1>Lucas <br /> Montenegro </h1>
                <h2>Desenvolvedor front-end</h2>
                <ul>
                    <li><a href='https://www.linkedin.com/in/lucasmontenegro/' target='_blank' rel='noreferrer'><AiFillLinkedin size={30} /></a></li>
                    <li><a href='https://github.com/lukinhas563' target='_blank' rel='noreferrer'><AiFillGithub size={30} /></a></li>
                </ul>

            </div>
            <div className='headerComponent-skills'>
                <h4>Habilidades</h4>
                <ul>
                    {skillsData.map((skill, index) => {
                        return (
                            <li
                                key={index}
                                title={skill.name}
                                onMouseOver={() => setSkillName(skill.name)}
                                onMouseOut={() => setSkillName('')}
                            >
                                <img src={skill.icon} alt={skill.alt} />
                                {skillName === skill.name && <p>{skill.name}</p>}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </header>
    )
}