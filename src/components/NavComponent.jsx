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

    function handleClick() {

        const list = document.querySelector('.navComponent-list')
        const line1 = document.querySelector('.line1')
        const line2 = document.querySelector('.line2')
        const line3 = document.querySelector('.line3')


        if (list.classList[1] !== 'active') {

            list.classList.add('active')
            line1.classList.add('line1Active')
            line2.classList.add('line2Active')
            line3.classList.add('line3Active')

        } else {
            list.classList.remove('active')
            line1.classList.remove('line1Active')
            line2.classList.remove('line2Active')
            line3.classList.remove('line3Active')
        }

    }

    return (
        <nav className='navComponent'>
            <a href={idHome === null ? '/' : '#home'} className='navTitle'>Lucas M.</a>

            <div className='mobile'>
                <div className='mobile-menu' onClick={() => handleClick()}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
            </div>


            <ul className='navComponent-list'>
                <li onClick={() => handleClick()}><a href={idHome === null ? '/' : '#home'}>Inicio</a></li>
                <li onClick={() => handleClick()}><a href={idAbout === null ? '/' : '#about'}>Sobre</a></li>
                <li onClick={() => handleClick()}><a href={idProjects === null ? '/' : '#projects'}>Projetos</a></li>
                <li onClick={() => handleClick()}><a href={idContact === null ? '/' : '#contact'}>Contato</a></li>
                {signed && <li onClick={() => handleGoogleSignOut()} className='signOut'>Sair</li>}
            </ul>
        </nav>
    )
}