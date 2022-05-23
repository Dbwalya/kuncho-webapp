import React from 'react';
import './Videos.css';
import Video from './Video.js';

const Videos = () => {
    return(
        <div className='videos__wrapper'>
            <div className='videos'>
                <Video videoLink="https://www.youtube.com/embed/NLjx100fwWM" />  
                <Video videoLink="https://www.youtube.com/embed/rB7Geg6hhQc" />  
                <Video videoLink="https://www.youtube.com/embed/lGwa6__oA3w" />  
                <Video videoLink="https://www.youtube.com/embed/HpFMqLEJRWE" />        
            </div>
                <a href="https://www.youtube.com/c/KunchoMindset">More Videos...</a>
        </div>
        
    )
}

export default Videos
