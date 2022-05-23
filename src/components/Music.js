import React from 'react';
import Track from './Track';
import './Music.css';

const Music = () => {
    return (
        <div className="music">
                <h2>Music</h2>
                <div className="music__container">
                    <Track track="https://open.spotify.com/embed/track/2yBETN6ZKKJnDDsMzVyOmT?utm_source=generator"/>
                    <Track track="https://open.spotify.com/embed/track/2Stmbtni53vyAYd9cVL3gZ?utm_source=generator"/>
                    <Track track="https://open.spotify.com/embed/track/4yNumtdtwcNxBpgx4zxzKJ?utm_source=generator"/>
                    <Track track="https://open.spotify.com/embed/track/1db5lmXjmtGQ5OrfW7U6EW?utm_source=generator"/>
                    <Track track="https://open.spotify.com/embed/track/4vaG60CLQNaEX7fvN2irI8?utm_source=generator"/>
                    <Track track="https://open.spotify.com/embed/track/4sVEXfoxMAWhOC0xqF3NKr?utm_source=generator"/>
                </div>    
               <a href='https://open.spotify.com/artist/5u0UgOzJpQ7Q4IPuxOjqnE'>Listen to more</a>
        </div>
    )
}

export default Music