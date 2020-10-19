import React from "react"
import { Container} from "reactstrap";
import socialLinks from '../constants/socialLinks'

const Hero = ({toggleDarkMode}) => {

    return (
        <div className="hero section-odd">
            <Container>
                {/* <div className="toggle-container">
                  <button onClick={toggleDarkMode}>Toggle Mode</button>
                </div> */}
                <div className="col-12 col-md-12 hero-text">
                    <div className="underline"></div>
                    <h1>Omanshu Mahawar</h1>
                    <h5>3rd Year CSE Under Graduate</h5>
                    <button className="btn">
                        Contact Me
                    </button>
                    
                    <ul className="social-links">
                        { socialLinks.map(link => {
                                return (
                                    <li key={link.id}>
                                        <a href={link.url} className="social-link">
                                            {link.icon}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Hero;