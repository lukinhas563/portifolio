import { useContext, useEffect, useState } from 'react'
import { AuthGoogleContext } from '../context/authGoogle'
import './NavComponent.css'


export default function NavComponent() {

    const [idHome, setIdHome] = useState(null)
    const [idAbout, setIdAbout] = useState(null)
    const [idProjects, setIdProjects] = useState(null)
    const [idContact, setIdContact] = useState(null)

    const { signed, handleGoogleSignOut } = useContext(AuthGoogleContext)

    useEffect(() => {

        const idHome = document.getElementById('home')
        const idAbout = document.getElementById('about')
        const idProjects = document.getElementById('projects')
        const idContact = document.getElementById('contact')

        setIdHome(idHome)
        setIdAbout(idAbout)
        setIdProjects(idProjects)
        setIdContact(idContact)

    }, [])


    return (
        <nav className='navComponent'>
            <a href={idHome === null ? '/' : '#home'} className='navTitle'>Lucas M.</a>
            <ul className='navComponent-list'>
                <li><a href={idHome === null ? '/' : '#home'}>Inicio</a></li>
                <li><a href={idAbout === null ? '/' : '#about'}>Sobre</a></li>
                <li><a href={idProjects === null ? '/' : '#projects'}>Projetos</a></li>
                <li><a href={idContact === null ? '/' : '#contact'}>Contato</a></li>
                {signed && <li onClick={() => handleGoogleSignOut()} className='signOut'>Sair</li>}
            </ul>
        </nav>
    )
}