import type { ProjectCardProps } from "../../models/ProjectCard"
import Button from "../shared/button/Button"
import './ProjectCard.scss'

const ProjectCard = (ProjectCard: ProjectCardProps) => {

  return (
    <div className="Card">
      {ProjectCard.ProjectCard.imageLeftSide &&
        <div className="Card_Container left">
          <img src={ProjectCard.ProjectCard.thumbnail} className="Card_Container_Image " />
        </div>
      }
      <div className="Card_Container">
        <h2 className="Card_Container_Title">{ProjectCard.ProjectCard.title}</h2>
        <p className="Card_Container_Subtitle">{ProjectCard.ProjectCard.subtitle}</p>
        <div className="Card_Container_Divider"></div>
        <p className="Card_Container_Description">{ProjectCard.ProjectCard.description}</p>
        <div className="Card_Container_Button">
          <Button text="View More" />
        </div>
      </div>
      {!ProjectCard.ProjectCard.imageLeftSide &&
        <div className="Card_Container right">
          <img src={ProjectCard.ProjectCard.thumbnail} className="Card_Container_Image" />
        </div>
      }
    </div>
  )
}

export default ProjectCard
