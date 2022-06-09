import React from 'react'
import './intro.css'

import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

import { themeContext } from '../../Context'
import { useContext } from 'react';

import { motion } from 'framer-motion';
const Intro = () => {
     const transition={ duration:2, type:'spring'}

     const theme=useContext(themeContext)
     const darkMode=theme.state.darkMode;

  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span>Hello! I Am</span>
                <span>Ian Kamau</span>
                <span>Frontend Developer with high level of experience in web designing and development,
                producing the quality work</span>
            </div>

            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <img src={Github} alt="" srcset="" />
                <img src={LinkedIn} alt="" srcset="" />
                <img src={Instagram} alt="" srcset="" />
            </div>
        </div>

        <div className="i-right">
            <img src={Vector1} alt="" srcset="" />
            <img src={Vector2} alt="" srcset="" />
            <img src={boy} alt="" srcset="" />
            <motion.img  

             className='floating-div'
                initial={{left: '-36%'}}
                whileInView={{left:'-24%'}}
                transition={transition}
            src={glassesimoji} alt="" srcset="" />

            <motion.div 
            className='floating-div'
                initial={{top: '-4%', left: '74%'}}
                whileInView={{left: '68%'}}
                transition={transition}
            style={{top: '-4%', left:'68%'}}>
                <FloatingDiv image={Crown} txt1='web' txt2='Developer'/>
            </motion.div>



            <motion.div
             className='floating-div'
                initial={{left: '9rem', top:'18rem'}}
                whileInView={{left: '0rem'}}
                transition={transition}
             style={{top:'18rem', left:'0rem'}}>
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
            </motion.div>
            
            <div className='blur' style={{background:"rgb(238 210 255)"}}></div>
            <div className="blur" 
            style={{background:'#C1F5FF',
                    top:'17rem',
                    width:'21rem',
                     height: '11rem',
                     left:'-9rem'}}

            ></div>
        
        </div>
    </div>
  )
}

export default Intro