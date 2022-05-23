import React from 'react'
import './Video.css'
const Video = ({ videoLink }) => {
  return (
    <div className="video">
         <iframe width="" height="" src={ videoLink } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default Video