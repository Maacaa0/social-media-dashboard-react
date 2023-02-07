import React from "react";

export default function Overview(props) {
    return (

        <div style={props.styles.cardBg} className="overview">
            <div className="overview-top-container">
                <p style={props.styles.otherTextColor}  className="overview-text">{props.text}</p>
                <img src={props.img} alt="#" />
            </div>
            <div className="overview-bottom-container">
                <p style={props.styles.headingColor} className="overview-count">{props.count}</p>
                <div className="percentage-container">
                    <img src={props.arrow} alt="#" />
                    <small style={{color: props.color}} className="overview-percentage"> {props.percentage}%</small>
                </div>
            </div>
        </div>
    )
}