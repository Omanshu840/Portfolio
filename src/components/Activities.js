import React from "react"
import { Container } from "reactstrap"
import activities from '../constants/activities'

class Activities extends React.Component {

    render() {
        return (
            <div className="section-odd activities">
                <div className="section-title">
                    <h2>Activities</h2>
                    <div className="underline"></div>
                </div>
                <div className="Timeline">
                    <Container>
                        {activities.slice(0).reverse().map((item, idx) => {
                            const dir = idx % 2 === 0 ? "timeline-item-left" : "timeline-item-right";
                            return (
                                <div className={dir}>
                                    <div className="timeline-img">
                                        
                                    </div>
                                    <div className="timeline-content">
                                        <div className="date">{item.date}</div>
                                        <img src={item.imgLink} className="act-img" alt={item.id}/>
                                        <h3>{item.title}</h3>
                                        <h4>{item.company}</h4>
                                    </div>
                                </div>
                            )
                        })}
                        {/* <div className="timeline-item-left">
                            <div className="timeline-img"></div>
                            <div className="timeline-content">
                                <h2>Projects announced</h2>
                                <div className="date">April 15, 2020</div>
                            </div>
                        </div>
                        <div className="timeline-item-right">
                            <div className="timeline-img"></div>
                            <div className="timeline-content">
                                <h2>Projects announced</h2>
                                <div className="date">April 15, 2020</div>
                            </div>
                        </div> */}
                    </Container>
                </div>
            </div>
    )}
}

export default Activities;