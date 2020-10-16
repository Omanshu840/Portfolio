import React from "react"
import { Container} from "reactstrap";
import SocialLinks from "../constants/socialLinks"

const Hero = () => {

    return (
        <div className="hero">
            <Container>
                <div className="col-12 col-md-8 hero-text">
                    <div className="underline"></div>
                    <h1>Omanshu Mahawar</h1>
                    <h5>3rd Year CSE Under Graduate</h5>
                    <button className="btn">
                        Contact Me
                    </button>
                    <SocialLinks/>
                </div>
            </Container>
        </div>
    )
}

export default Hero;