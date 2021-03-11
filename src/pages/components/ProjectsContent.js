import * as React from "react"
import "../styles/ProjectsContent.css"
import SnakeImg from "../../images/snake.png"
import PortfolioImg from "../../images/portfolio.png"
import GalleryImg from "../../images/gallery.png"

const ProjectsContent = () => {
    return(
        
            <div id="projects-content">
              <div className="section">
                <div className="slide">
                    <div id="project-box">
                        <div id="project-box-inner">
                            <div className="background-projects">
                                <img src={SnakeImg} alt="project1"></img>
                            </div>
                            <div className="projects-text">
                                <h1>Snake Game</h1>
                                <p>It is written in JavaScript. You can play solo or
                                    with your friend in 2 players mode.</p>
                                <div className="info-links">
                                    <div className="info-links-inner">
                                        <a href="https://snakeportfolio.netlify.app">Live</a>
                                        <a href="https://github.com/maciejlug/snakegame">Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <div id="project-box">
                            <div id="project-box-inner">
                                <div className="background-projects">
                                    <img src={PortfolioImg} alt="project1"></img>
                                </div>
                                <div className="projects-text">
                                    <h1>Portfolio</h1>
                                    <p>The site you currently are on. To make it I
                                    used Gatsby framework and fullPage.js.</p>
                                    <div className="info-links">
                                        <div className="info-links-inner">
                                            <a href="https://snakeportfolio.netlify.app">Live</a>
                                            <a href="https://github.com/maciejlug/snakegame">Github</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="slide">
                    <div id="project-box">
                            <div id="project-box-inner">
                                <div className="background-projects">
                                    <img src={GalleryImg} alt="project1"></img>
                                </div>
                                <div className="projects-text">
                                    <h1>Gallery</h1>
                                    <p>This site is written in pure JavaScript. The purpose
                                    of it was to learn.</p>                                   
                                    <div className="info-links">
                                        <div className="info-links-inner">
                                            <a href="https://mygalleryjs.netlify.app">Live</a>
                                            <a href="https://github.com/maciejlug/gallery-js-css">Github</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    )
}

export default ProjectsContent;