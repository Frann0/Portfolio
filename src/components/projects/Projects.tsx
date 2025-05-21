import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import type { ProjectCardProps } from "../../models/ProjectCard"
import ProjectCard from "../projectCard/ProjectCard"
import './Projects.scss'

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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
    return projects.map((project) => {
      return {
        ProjectCard: {
          ...project.ProjectCard,
          imageLeftSide: isMobile ? true : project.ProjectCard.imageLeftSide
        }
      }
    })
  }

  return (
    <motion.div className="Projects"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      id="Projects">

      {transformProjects().map((project, index) => (
        <motion.div variants={childVariants} className="Projects_Card" key={index}>
          <ProjectCard ProjectCard={project.ProjectCard} key={index} />
          <div className="Projects_Card_Divider"></div>
        </motion.div>
      ))
      }
    </motion.div>
  )
}

export default Projects
