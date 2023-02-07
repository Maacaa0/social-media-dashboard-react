import React from "react";

export default function Navbar(props) {

    return (
        <div style={props.styles.navbarBg} className="navbar">
            <div>
            <h1 style={props.styles.headingColor}>Social Media Dashboard</h1>
            <small style={props.styles.otherTextColor}>Total Followers: 23,004</small>
            </div>
            <div className="dark-mode-container">
            <p style={props.styles.headingColor} className="dark-mode-text">Dark Mode</p>
            <label className="switch">
                <input onChange={props.toggler} type="checkbox" />
                <span className="slider round"></span>
            </label>
            </div>
        </div>
    )
}