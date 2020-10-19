import React from "react"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import projects from "../constants/projects"

class Projects extends React.Component {


    render() {

        return (
            <div className="section-even projects">
                <div className="section-title">
                    <h2>Projects</h2>
                    <div className="underline"></div>
                </div>
                <div className="section-center projects-center">
                    {
                        projects.map((item, index) => {
                            return(
                                <div className="project">
                                    <img className="project-img" src={item.imgLink} alt="img" />
                                
                                    <div className="project-info">
                                        <span className="project-number">0{index + 1}.</span>
                                        <h3>{item.title}</h3>
                                        <p className="project-desc">
                                            {item.description}
                                        </p>
                                        <div className="project-stack">
                                            {item.stack.map(tool => {
                                                return <span className="stack-item">{tool}</span>
                                            })}
                                        </div>
                                        <div className="project-links">
                                        <a href="github">
                                            <FaGithubSquare className="project-icon" />
                                        </a>
                                        <a href="url">
                                            <FaShareSquare className="project-icon" />
                                        </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            )
        }
}

export default Projects;