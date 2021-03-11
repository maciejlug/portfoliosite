import * as React from "react"
import "../styles/HeaderContent.css"
import sample from './bg3.mp4';

const HeaderContent = () => {
    return(
        <div className="content">
            <div id="header-content">
 
            <video className='videoTag' className="video" autoPlay loop muted data-keepplaying>
                    <source src={sample} type='video/mp4' />
                </video>
  
               
                    
                
            
                <div className="header-text-bg"></div>
                <div className="header-text">
                    <div className="big-text">
                        <p>Maciej Ługowski</p>
                    </div>
                    <div className="small-text">
                        <p>Front-End Developer</p>
                    </div>
                    <div className="header-button">
                        <a href="#projects">Projects</a>
                    </div>
                </div>
                
            </div>

        </div>
        
    )
}

export default HeaderContent;