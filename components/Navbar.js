import React from 'react'

export default function Navbar() {
    const logoSource = `../images/airbnb-logo.png`

    return (
        <div>
            <nav className="nav">
                <img src={logoSource} className="nav--logo" />
            </nav>
        </div>
    )
}