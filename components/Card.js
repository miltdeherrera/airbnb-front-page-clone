import React from 'react'

export default function Card (props) {
    const starUrl = '../images/star.png'
    
    let badgeText
    if (props.item.openSpots === 0) badgeText = 'SOLD OUT'
    else if (props.item.location === 'Online') badgeText = 'ONLINE'
    
    return (
        <div className="card">
            {(badgeText) && <div className="card--badge">{badgeText}</div>}
            <img className="card--photo" src={`../images/${props.item.coverImg}`} />
            <div className="card--stats">
                <img className="card--stats--star" src={starUrl} />
                <span className="black">{props.item.stats.rating}</span>
                <span className="grey">({props.item.stats.reviewCount}) • </span>
                <span className="grey">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}