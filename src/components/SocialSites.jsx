import React from "react";

export default function SocialSites(props) {

    const bg = {
        borderTop: props.border,
        background: props.theme === "light" ? "#f0f2fa" : "#252a41"
    }
 
    return (
        <div className="card" style={bg}>
            <div className="card-info">
                <img src={props.img} alt="social-site" />
                <p style={props.styles.otherTextColor} className="card-name">{props.name}</p>
            </div>
            <h3 style={{color: props.theme === "light" ? "black" : "white"}} className="card-followers">{props.followersCount}</h3>
            <span style={props.styles.otherTextColor} className="card-type">{props.type}</span>
            <div style={{color: props.color}} className="today-container">
                <img src={props.today} alt="#" />
                <p className="card-today">{props.todayCount} Today</p>
            </div>
        </div>
    )
}

