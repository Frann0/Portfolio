import { useEffect, useState } from "react"
import type { ProjectCardProps } from "../../models/ProjectCard"
import ProjectCard from "../projectCard/ProjectCard"
import './Projects.scss'

const Projects = () => {
  const projects = [
    {
      ProjectCard: {
        title: "Project 1",
        subtitle: "Subtitle 1",
        description: "Description 1",
        thumbnail: "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://example.com",
        imageLeftSide: true
      }
    },
    {
      ProjectCard: {
        title: "Project 2",
        subtitle: "Subtitle 2",
        description: "Description 2",
        thumbnail: "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://example.com",
        imageLeftSide: false
      }
    },
    {
      ProjectCard: {
        title: "Project 3",
        subtitle: "Subtitle 3",
        description: "Description 3",
        thumbnail: "https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://example.com",
        imageLeftSide: true
      }
    }
  ] as ProjectCardProps[]

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }

    })

    return () => {
      window.removeEventListener('resize', () => {
        setIsMobile(false)
      })
    }
  }, [])

  const transformProjects = () => {
    return projects.map((project, index) => {
      return {
        ProjectCard: {
          ...project.ProjectCard,
          imageLeftSide: isMobile ? true : project.ProjectCard.imageLeftSide
        }
      }
    })
  }

  return (
    <div className="Projects" id="Projects">
      {transformProjects().map((project, index) => (
        <div className="Projects_Card" key={index}>
          <ProjectCard ProjectCard={project.ProjectCard} key={index} />
          <div className="Projects_Card_Divider"></div>
        </div>
      ))
      }
    </div>
  )
}

export default Projects
