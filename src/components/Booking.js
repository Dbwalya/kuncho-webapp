import React from 'react'
import './Booking.css'

const Booking = ({ shades }) => {
    return (
        <div className="booking"  style={{ backgroundImage: `url(${ shades })`}}>
                <form>
                    <h2>Book Us</h2>
                    <input type='text' placeholder='Enter Email Address' />
                    <input type='text' placeholder='Enter your Phone Number' />
                    <select>
                        <option value="#">Select type of Booking</option>
                        <option value="#">Club Performance</option>
                        <option value="#">Birthday Performance</option>
                        <option value="#">Event Performance </option>
                        <option value="#">Corprate Performance</option>
                        <option value="#"></option>
                 </select>

                 <button>Send</button>
                </form>
        </div>
    ) 
}

export default Booking