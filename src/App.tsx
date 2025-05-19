import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Navbar from './components/navbar/navbar'
import Button from './components/shared/button/Button'
import Hero from './components/hero/Hero'
import Endorsment from './components/endorsments/Endorsments'
import About from './components/about/About'
import ProjectCard from './components/projectCard/ProjectCard'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

function App() {

  return (
    <>
      <video
        className="Blackhole"
        src="videos/blackhole.webm"
        autoPlay
        muted
        loop
        playsInline
      />
      <Navbar />
      <div className="App">

        <Hero />
        <Endorsment />
        <About />
        <Projects />
        <Contact />
      </div>

    </>
  )
}

export default App
