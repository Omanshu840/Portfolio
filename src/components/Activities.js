import React from "react"
import activities from '../constants/activities'

class Activities extends React.Component {

    render() {
        return (
            <div className="section activities">
                <div className="section-title">
                    <h2>Activities</h2>
                    <div className="underline"></div>
                </div>
                <div className="container activities-content">
                    {activities.slice(0).reverse().map(item => {
                        return (
                            <div>
                                <div className="activity row">
                                    <img src={item.imgLink} className="act-img col-12 col-sm-2" alt={item.id}/>
                                    <div className="act-decription col-12 col-sm-8">
                                        <h3>{item.title}</h3>
                                        <h4>{item.company}</h4>
                                        <p>{item.date}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
    )}
}

export default Activities;