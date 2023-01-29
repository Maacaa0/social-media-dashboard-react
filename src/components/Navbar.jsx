import React from "react";

export default function Navbar() {
    return (
        <div className="navbar">
            <div>
            <h1>Social Media Dashboard</h1>
            <small>Total Followers: 23,004</small>
            </div>
            <div className="dark-mode-container">
            <p className="dark-mode-text">Dark Mode</p>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            </div>
        </div>
    )
}