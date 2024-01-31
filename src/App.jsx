import './App.css'

import NavComponent from './components/NavComponent'
import HeaderComponent from './components/HeaderComponent'
import AboutComponent from './components/AboutComponent'
import ProjectsComponent from './components/ProjectsComponent'
import ContactComponent from './components/ContactComponent'
import FooterComponent from './components/FooterComponent'
import { useEffect, useState } from 'react'
import { addOnSnapshot } from './services/observers/PostObserver'


function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {

    addOnSnapshot(setPosts)

  }, [])


  return (
    <>
      <NavComponent />
      <HeaderComponent />
      <AboutComponent />
      <ProjectsComponent posts={posts} />
      <ContactComponent />
      <FooterComponent />
    </>
  )
}

export default App
