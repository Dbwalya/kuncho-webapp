
import React from 'react';
import shades from './images/kuncho logo2.jpg'
import './About.css';


const About = () => {
    return (       
           <div className='about'>
               <div className='about__header'>
                   <img src={shades} alt="" />
                   <h2>About</h2>
                    
               </div>
               <div className='about__info'>
                    <p>
                        Lorem ipsumlique qui alias suscsoluta!sit amet consectetur adipisicing elit. Magni nequeetur.
                        Lorem ipsum dolor sit ametugitLorem ipsum dolor sit amet consectetur adipisimui..
                        Lorem ipsumlique qui alias suscsoluta!sit amet consectetur adipisicing elit. Magni nequeetur.
                        Lorem ipsum dolor sit ametugitLorem ipsum dolor sit amet consectetur adipisimui..
                    </p>
                        <a href='#'>Read More...</a>
               </div>

              
           </div> 
       
       
    )
}

export default About 