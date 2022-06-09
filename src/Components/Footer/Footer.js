import React from 'react'
import './footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

import wave from '../../img/wave.png'

const Footer = () => {
  return (
    <div className="footer">
     <img src={wave} alt="" srcset="" style={{width:'100%'}}/>
        <div className="f-content">
          <span>kamauwamkuu@gmail.com</span>
          <div className="f-icons">
              <Insta color='white' size='3rem'/>
              <Facebook color='white' size='3rem'/>
              <Github color='white' size='3rem'/>
          </div>
            
        </div>
    </div>
  )
}

export default Footer