import React from 'react'
import './work.css'
import { motion } from 'framer-motion'

import UpWork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Shopify from '../../img/Shopify.png'
import Amazon from '../../img/amazon.png'
import Facebook from '../../img/Facebook.png'

const Work = () => {
  return (
    <div className="works">
          <div className="awesome">
                <span>Works for All these</span>
                <span>Brands & Clients</span>
                <span>Lorem ipsum dolor sit amet consectetur,
                <br />
                 adipisicing elit. Repellat, numquam?
                 <br />
                 Lorem ipsum dolor sit amet consectetur,
                 <br />
                 Lorem ipsum dolor sit amet consectetur,
                 </span>
                  
                 <button className="button s-button">Hire Me</button>
                
                 <div className="blur s-blur" style={{ background:'#ABF1FF94' }}></div>

                  
        </div>

        <div className="w-right">

                      <motion.div 

                        initial={{rotate:45}}
                        whileInView={{rotate:0}}
                        viewport={{margin: '-40px'}}
                        transition={{duration:3.5, type: 'spring'}}

                      className="w-mainCircle">
                          <div className="w-secCircle">
                              <img src={UpWork} alt="" srcset="" />
                          </div>

                          <div className="w-secCircle">
                              <img src={Fiverr} alt="" srcset="" />
                          </div>

                          <div className="w-secCircle">
                              <img src={Amazon} alt="" srcset="" />
                          </div>

                          <div className="w-secCircle">
                              <img src={Shopify} alt="" srcset="" />
                          </div>

                           <div className="w-secCircle">
                              <img src={Facebook} alt="" srcset="" />
                          </div>

                          <div className="w-backCircle blueCircle"></div>
                          <div className="w-backCircle yellowCircle"></div>
                          
                      </motion.div>
                  </div>
    </div>
  ) 
}

export default Work