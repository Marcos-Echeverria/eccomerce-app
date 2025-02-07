import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'

const home = () => {
    return (
        <div>
            <LatestCollection />
            <Hero />
        </div>
    )
}

export default home