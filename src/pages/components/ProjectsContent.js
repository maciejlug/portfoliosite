import * as React from "react";
import "../styles/ProjectsContent.css";
import SnakeImg from "../../images/snake.png";
import PortfolioImg from "../../images/portfolio.png";
import GalleryImg from "../../images/gallery.png";
import CounterImg from "../../images/counter.png";
import VideoHost from "../../images/videohost.png";
import Movies from "../../images/movies.png";

const ProjectsContent = () => {
  return (
    <div id="projects-content">
      <div className="section">
        <div className="slide">
          <div id="project-box">
            <div id="project-box-inner">
              <div className="background-projects">
                <img src={Movies} alt="project1"></img>
              </div>
              <div className="projects-text">
                <h1>Movies</h1>
                <p>
                  To create this site I used React framework. You can check
                  information abaout movies, series etc.
                </p>
                <div className="info-links">
                  <div className="info-links-inner">
                    <a href="https://moviesportfolio.netlify.app/">Live</a>
                    <a href="https://github.com/maciejlug/movies">Github</a>
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
                <img src={SnakeImg} alt="project2"></img>
              </div>
              <div className="projects-text">
                <h1>Snake Game</h1>
                <p>
                  It is written in JavaScript. You can play solo or with your
                  friend in 2 players mode.
                </p>
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
                <img src={VideoHost} alt="project3"></img>
              </div>
              <div className="projects-text">
                <h1>Video Hosting</h1>
                <p>
                  You can upload, comment and like videos. Created with Django
                  framework and bootstrap.
                </p>
                <div className="info-links">
                  <div className="info-links-inner">
                    <a href="http://videohostlug.ct8.pl/">Live</a>
                    <a href="https://github.com/maciejlug/First-project-Django-youtube/blob/main/views.py">
                      Github
                    </a>
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
                <img src={PortfolioImg} alt="project4"></img>
              </div>
              <div className="projects-text">
                <h1>Portfolio</h1>
                <p>
                  The site you currently are on. To make it I used Gatsby
                  framework and fullPage.js.
                </p>
                <div className="info-links">
                  <div className="info-links-inner">
                    <a href="https://portfoliositelug.netlify.app/">Live</a>
                    <a href="https://github.com/maciejlug/portfoliosite">
                      Github
                    </a>
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
                <img src={CounterImg} alt="project5"></img>
              </div>
              <div className="projects-text">
                <h1>Counter</h1>
                <p>A site that shows you time left to the date you picked. </p>
                <div className="info-links">
                  <div className="info-links-inner">
                    <a href="https://newcounter.netlify.app/">Live</a>
                    <a href="https://github.com/maciejlug/counter-improved">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;
