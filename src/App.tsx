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
        <ProjectCard ProjectCard={{
          title: "Project Title",
          subtitle: "Project Subtitle",
          description: "Project Description",
          thumbnail: "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          imageLeftSide: true,
          link: "https://example.com"
        }} />
        <ProjectCard ProjectCard={{
          title: "Project Title",
          subtitle: "Project Subtitle",
          description: "Project Description",
          thumbnail: "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          imageLeftSide: false,
          link: "https://example.com"
        }} />
      </div>

    </>
  )
}

export default App
