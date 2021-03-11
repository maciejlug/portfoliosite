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
                                <p>Game written in JavaScript. You can play solo or
                                    with your friend in 2 players mode.</p>
                                <div className="info-links">
                                    <a href="https://snakeportfolio.netlify.app">Live</a>
                                    <a href="https://github.com/maciejlug/snakegame">Github</a>
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
                                    <h1>Snake Game</h1>
                                    <p>Game written in JavaScript. You can play solo or
                                        with your friend in 2 players mode.</p>
                                    <div className="info-links">
                                        <a href="https://snakeportfolio.netlify.app">Live</a>
                                        <a href="https://github.com/maciejlug/snakegame">Github</a>
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
                                    <h1>Snake Game</h1>
                                    <p>Game written in JavaScript. You can play solo or
                                        with your friend in 2 players mode.</p>
                                    <div className="info-links">
                                        <a href="https://snakeportfolio.netlify.app">Live</a>
                                        <a href="https://github.com/maciejlug/snakegame">Github</a>
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