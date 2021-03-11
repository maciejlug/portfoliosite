import * as React from "react"
import "../styles/ContactContent.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Footer from "./Footer"

const ContactContent = () => {
    return(
        
            <div id="contact-content">
                <div className="contact-grid-box">
                    <div className="email-box" >
                        <div className="box-icon">
                            <FontAwesomeIcon icon={faAt} size="4x" />
                        </div>
                        <div className="box-text-upper">
                            <p>Email</p>
                        </div>
                        <div className="box-text-lower">
                            <p>maciej.lugowski5@gmail.com</p>
                        </div>
                    </div>

                    <div className="phone-box">
                        <div className="box-icon">
                                <FontAwesomeIcon icon={faPhone} size="4x" />
                            </div>
                            <div className="box-text-upper">
                                <p>Phone</p>
                            </div>
                            <div className="box-text-lower">
                                <p>(+48) 664 991 321</p>
                        </div>
                    </div>
                    <div className="github-box">
                        <a href="https://github.com/maciejlug">
                            <div className="box-icon">
                            <FontAwesomeIcon icon={faGithubAlt} size="4x" />
                            </div>
                            <div className="box-text-upper">
                                <p>Github</p>
                            </div>
                            <div className="box-text-lower">
                                <p>github.com/maciejlug</p>
                            </div>
                        </a>
                    </div>
                    <div className="facebook-box">
                         <a href="https://www.facebook.com/user.654123/">
                         <div className="box-icon">
                            <FontAwesomeIcon icon={faFacebook} size="4x" />
                        </div>
                        <div className="box-text-upper">
                            <p>Facebook</p>
                        </div>
                        <div className="box-text-lower">
                            <p>facebook.com</p>
                        </div>
                         </a>
                    </div>
                    <Footer />
                </div>
                
            </div>


    )
}

export default ContactContent;