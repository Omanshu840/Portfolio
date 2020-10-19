import React from "react"

class Skills extends React.Component {

    render() {

        const data = {
            development: [["C++", "95"], ["Python", "66"], ["Java", "75"], ["HTML", "95"], ["CSS", "90"], ["Javascript", "66"], ["SQL", "66"]],
            frameworks: [["Django", "66"], ["Flask", "80"], ["React", "75"]],
        }

        return (
            <div className="section-odd skills">
                <div className="section-title">
                    <h2>Skills</h2>
                    <div className="underline"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 skill-subset">
                            <h3>Development</h3>
                                {data.development.map(item => {
                                    return (
                                        <div className="skill">
                                            <div className="col-12">
                                                {item[0]}
                                            </div>
                                            <div className="col-12">
                                                <progress id="file" value={item[1]} max="100"></progress>
                                            </div>
                                        </div>
                                     )
                                })}
                        </div>
                        <div className="col-12 col-md-5 skill-subset">
                            <h3>Frameworks</h3>
                                {data.frameworks.map(item => {
                                    return (
                                        <div className="skill">
                                            <div className="col-12">
                                                {item[0]}
                                            </div>
                                            <div className="col-12">
                                                <progress id="file" value={item[1]} max="100"></progress>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                </div>
            </div>        
    )}
}

export default Skills;