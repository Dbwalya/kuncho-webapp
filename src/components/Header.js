import React from 'react';
import headerImage from './images/header-image.jpg';
import './Header.css';
import { YouTube } from '@mui/icons-material';

const Header = () => {
    return (
     
        <div className='header'>        
           <div className='header__right'>
               <div className='header__right-title'>
                    <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQInKe6M5CWCKG7xHE7ANpLkj60NzBpHMISwDL8N0j5-oRPQnU_4-1R7lL0fovE3NCdbwE&usqp=CAU" alt="" /></span>
                    <h2>Kuncho Mindset - Day By Day (Official Video)</h2>

                    <a href="https://www.youtube.com/watch?v=lGwa6__oA3w">Play Now</a>
               </div>
           <div className='fade' />             
            </div>
            </div>
            
       
       
    )
}

export default Header 