import React from "react";

export default function SocialSites(props) {
 
    return (
        <div className="card" style={{borderTop:props.border}}>
            <div className="card-info">
                <img src={props.img} alt="social-site" />
                <p className="card-name">{props.name}</p>
            </div>
            <h3 className="card-followers">{props.followersCount}</h3>
            <span className="card-type">{props.type}</span>
            <div style={{color: props.color}} className="today-container">
                <img src={props.today} alt="#" />
                <p className="card-today">{props.todayCount} Today</p>

            </div>
        </div>
    )
}

