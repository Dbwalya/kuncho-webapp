import React from 'react'
import './AboutUs.css'
import shades from '../components/images/shades.jpg'
import Booking from './Booking.js'
const AboutUs = () => {

    return (
        <div className="aboutus" style={{ backgroundImage: `url(${ shades })`}}>
            <div className='aboutus__top' >
                <h1>About Us</h1>

                <div className="aboutus__text">
                    <h2>Kuncho Mindset</h2>

                    <span>
                        Kuncho Mindset age 24 real names
                        Gift Kunyanda 
                        founder of Kuncho Dynasty Music
                    </span>
                </div>
                <div className="aboutus__text">
                    <h2>Happy Foreva Records</h2>

                    <span>
                        Kuncho Dynasty Music was Founded
                        by Gift Kunyanda well known as Kuncho Mindset.This is a record 
                        label run by a great team. Its main purpose is to put Zambian
                        talent on the map worldwide. 
                    </span>
                </div>
            </div>
            <h1>Booking Performances</h1>
            <Booking shades={ shades }/>
        </div>
    )
}

export default AboutUs