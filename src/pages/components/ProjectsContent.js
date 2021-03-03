import * as React from "react"
import "../styles/ProjectsContent.css"
import SnakeImg from "../../images/snake.png"
import PortfolioImg from "../../images/portfolio.png"
import GalleryImg from "../../images/gallery.png"

const ProjectsContent = () => {
    return(
        
            <div id="projects">
                <div className="projects-box">
                    <div className="text-projects-top">
                        <p>My projects</p>
                    </div>
                    <div className="project-container">
                        <div className="project-photo">
                            <img src={SnakeImg} alt=""></img>
                        </div>
                        <div className="project-text">
                            <div className="info">
                                <h1>Snake Game</h1>
                                <p>Game written in JavaScript. You can play solo or
                                    with your friend in 2 players mode.</p>
                            </div>
                            <div className="info-links">
                                    <a href="https://snakeportfolio.netlify.app">Live</a>
                                    <a href="https://github.com/maciejlug/snakegame">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-container">
                        <div className="project-text">
                            <div className="info">
                                <h1>My portfolio</h1>
                                <p>The site we currently are on. To make it I
                                    used Gatsby framework.</p>
                            </div>
                            <div className="info-links">
                                    <a href="https://snakeportfolio.netlify.app">Live</a>
                                    <a href="https://github.com/maciejlug/snakegame">Github</a>
                            </div>
                        </div>
                        <div className="project-photo">
                            <img src={PortfolioImg} alt=""></img>
                        </div>
                    </div>
                    <div className="project-container">
                        <div className="project-photo">
                            <img src={GalleryImg} alt=""></img>
                        </div>
                        <div className="project-text">
                        <div className="info">
                                <h1>Gallery</h1>
                                <p>This site is written in pure JavaScript. The purpose
                                    of it was to learn.
                                </p>
                            </div>
                            <div className="info-links">
                                    <a href="https://mygalleryjs.netlify.app">Live</a>
                                    <a href="https://github.com/maciejlug/gallery-js-css">Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    )
}

export default ProjectsContent;