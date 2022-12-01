import React from "react"

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import experienceData from './data'

export default function App() {
    const cards = experienceData
        .map(item => {
            return (
                <Card
                    key={item.id}
                    item={item} />
            )
        })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}