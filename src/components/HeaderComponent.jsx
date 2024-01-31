import './HeaderComponent.css'

import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export default function HeaderComponent() {

    return (
        <header className='headerComponent' id='home'>
            <div className='headerComponent-apresentation'>
                <h2>Lucas </h2>
                <h2>Montenegro</h2>
                <h3>Desenvolvedor front-end</h3>
                <ul>
                    <li><a href='https://www.linkedin.com/in/lucasmontenegro/' target='_blank' rel='noreferrer'><AiFillLinkedin size={30} /></a></li>
                    <li><a href='https://github.com/lukinhas563' target='_blank' rel='noreferrer'><AiFillGithub size={30} /></a></li>
                </ul>
            </div>
            <div className='headerComponent-about'>
                <h4>
                    Um entusiasta em desenvolvimento front-end apaixonado em criar soluções digitais inovadoras.
                </h4>
                <p>
                    Minha jornada profissional começou no campo de Comércio Exterior, onde obtive uma sólida formação.
                    No entanto, após dois anos trabalhando em contabilidade, percebi que minha verdadeira paixão reside
                    na criação de soluções digitais inovadoras.
                </p>
            </div>
            <div className='headerComponent-skills'>
                <h4>Habilidades</h4>
                <ul>
                    <li><img src='./icons/reacticon.png' alt='Icone React.js' /></li>
                    <li><img src='./icons/nextjsicon.png' alt='Icone Next.js' /></li>
                    <li><img src='./icons/jsicon.png' alt='Icone JavaScript' /></li>
                    <li><img src='./icons/tailwindicon.png' alt='Icone TailWind' /></li>
                    <li><img src='./icons/giticon.png' alt='Icone Git' /></li>
                    <li><img src='./icons/htmlicon.png' alt='Icone HTML5' /></li>
                    <li><img src='./icons/cssicon.png' alt='Icone CSS' /></li>
                    <li><img src='./icons/nodejsicon.png' alt='Icone Node.js' /></li>
                    <li><img src='./icons/figmaicon.svg' alt='Icone Figma' /></li>
                    <li><img src='./icons/stiledcomponenticon.png' alt='Icone StiledComponent' /></li>
                    <li><img src='./icons/firebaseicon.png' alt='Icone Firebase' /></li>
                    <li><img src='./icons/mysqlicon.png' alt='Icone MySQL' /></li>
                    <li><img src='./icons/dockericon.png' alt='Icone Docker' /></li>
                    <li><img src='./icons/mongodbicon.png' alt='Icone MongoDB' /></li>
                </ul>
            </div>
        </header>
    )
}