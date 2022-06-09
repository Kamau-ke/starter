import React from 'react'
import './portfolio.css'
import { Swiper, SwiperSlide} from 'swiper/react'

import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import 'swiper/css'

const Portfolio = () => {
  return (
    <div className="portfolio" id='Portfolio'>

      <span>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" srcset="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Ecommerce} alt="" srcset="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={MusicApp} alt="" srcset="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={HOC} alt="" srcset="" />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Portfolio