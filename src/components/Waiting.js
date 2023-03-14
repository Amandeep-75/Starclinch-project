import React from 'react'
import Card from './Card'

function Waiting() {
  return (
    <>
    <div className='home-center'>
    <div className='video-top-container '>
        <p>video</p>
    </div>

    <div className='details-container'>
    <div >
        <p className='main-details'>Details : </p>
    </div>
    <div className='waiting-details-flex'>
        <p className='details-heading'>Event</p>
        <p className='details-heading'>Location</p>
        <p className='details-heading'>Budget</p>
    </div>
    <div className='waiting-details-flex'>
        <p className='details-p'>2023-03-14</p>
        <p className='details-p secondp'>Delhi,India</p>
        <p className='details-p thirdp'>500000</p>
    </div>
    </div>

    <div>
        <h1 className='waiting-singer-heading'>SINGERS</h1>
        <p className='waiting-singer-p'>Select an artist that matches your vibe.</p>
    </div>

    <Card />

    </div>

    </>
  )
}

export default Waiting