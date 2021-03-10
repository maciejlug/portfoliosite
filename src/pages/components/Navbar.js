import * as React from "react"
import "../styles/Navbar.css"



const Navbar = () => {

    
    return(
        <div className="navbar">
            <div className="navbar-inner">
                <div className="logo">
                    <a href="#firstPage">Maciej Ługowski</a>
                </div>
                <ul className="links">
                    <li className="navbar-link active"><a href="#firstPage">Home</a></li>
                    <li className="navbar-link"><a href="#secondPage" >Projects</a></li>
                    <li className="navbar-link"><a href="#thirdPage" >Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;