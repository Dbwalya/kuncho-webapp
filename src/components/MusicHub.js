import React from 'react'
import { Link } from 'react-router-dom';
import './MusicHub.css';
import Track from './Track'
const MusicHub = () => {
  return (
    <div className='musicHub'>
        <h2>My Tracklist</h2>

        <div className='musicHub__body'>
            <Track track='https://open.spotify.com/embed/track/4yNumtdtwcNxBpgx4zxzKJ?utm_source=generator' />
            <Track track='https://open.spotify.com/embed/track/6tL73K9QlfyC2X8yV2KrAw?utm_source=generator' />
            <Track track='https://open.spotify.com/embed/track/1db5lmXjmtGQ5OrfW7U6EW?utm_source=generator' />
        </div>
       <a href="/music">See More</a>
    </div>
  )
}

export default MusicHub