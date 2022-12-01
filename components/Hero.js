import React from 'react'

export default function Hero () {
    const heroImageSource = '../images/photo-grid.png'
    
    return (
        <div className="hero">
            <img src={heroImageSource} className="hero--image"/>        
            <h1 className="hero--header">Online experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}