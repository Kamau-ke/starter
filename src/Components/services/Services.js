import React from 'react'
import './services.css'
import {motion} from 'framer-motion'

import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../card/Card';

import cv from './cv.docx'

const Services = () => {

  const transition={duration:1, type: 'spring'}
  return (
    <div className='services' id='Services'>

        <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>Lorem ipsum dolor sit amet consectetur,
                <br />
                 adipisicing elit. Repellat, numquam?
                 </span>
                  <a href={cv} download>
                 <button className="button s-button">Download CV</button>
                 </a>
                 <div className="blur s-blur" style={{ background:'#ABF1FF94' }}></div>
        </div>

        <motion.div className="cards" 
           initial={{left: '14rem'}}
                whileInView={{left: '3%'}}
                transition={transition}>

          <div 
             

          style={{left:'14rem'}}>
            <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={'Figma, Sketch, Photoshop, Adobe, Adobe xd outstanding designs lorem lorem dummy'}
            />
          </div>

         <div 
         style={{top:'12rem', left:'-4rem'}}>
           <Card 
           emoji={Glasses}
           heading={'Developer'}
           detail={'Html, Css, JavaScript, React outstanding designs lorem lorem dummy'}
           />
         </div>


         <div 
          style={{top:'19rem', left:'12rem'}}>
              <Card
            emoji={Humble}
            heading={'UI/UX'}
            detail={'outstanding designs lorem lorem dummy outstanding designs lorem lorem dummy'}
            />
         </div>

         <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>

        </motion.div>
    </div>
  )
}

export default Services