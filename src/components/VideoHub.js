import { Link } from 'react-router-dom';
import React from 'react'
import Video from './Video';
import './VideoHub.css';

const VideoHub = () => {
  return (
    <div className="videoHub">
        
        <h2>Videos</h2>

        <div className="videos__body">
            <Video videoLink="https://www.youtube.com/embed/NLjx100fwWM"  className="video"/>
            <Video videoLink="https://www.youtube.com/embed/rB7Geg6hhQc" className="video"/>
            <Video videoLink="https://www.youtube.com/embed/lGwa6__oA3w" className="video"/>
            <Video videoLink="https://www.youtube.com/embed/HpFMqLEJRWE" className="video"/>
        </div>
            <a href='/videos'>Watch More</a>
    </div>
  )
}

export default VideoHub