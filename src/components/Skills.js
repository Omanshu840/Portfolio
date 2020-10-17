import React from "react"

class Skills extends React.Component {

    render() {

        const data = {
            development: ["C++", "Python", "Java", "HTML", "CSS", "SQL"],
            frameworks: ["Django", "Flask", "React"],
        }

        return (
            <div className="section skills">
                <div className="section-title">
                    <h2>Skills</h2>
                    <div className="underline"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 skill-subset">
                            <h3>Development</h3>
                            <div className="row">
                                {data.development.map(item => {
                                    return (
                                        <div className="skill">
                                            {item}
                                        </div>
                                     )
                                })}
                            </div>
                        </div>
                        <div className="col-12 col-md-5 skill-subset">
                            <h3>Frameworks</h3>
                            <div className="row">
                                {data.frameworks.map(item => {
                                    return (
                                        <div className="skill">
                                            {item}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
    )}
}

export default Skills;