import React from 'react'
import './testimonial.css'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'

const Testimonial = () => {

    const client=[
        {
            img:profilePic1,
            review:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit Iure laudantium nesciunt dolor unde ipsam recusandae. ",
        },

         {
            img:profilePic2,
            review:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit Iure laudantium nesciunt dolor unde ipsam recusandae. ",
        },

         {
            img:profilePic3,
            review:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit Iure laudantium nesciunt dolor unde ipsam recusandae. ",
        },

         {
            img:profilePic4,
            review:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit Iure laudantium nesciunt dolor unde ipsam recusandae. ",
        }
    ]
  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Clients always get</span>
            <span>Exponential work</span>
            <span>from me..</span>

            <div className="blur t-blur1" style={{background: 'var(--purple)'}}></div>
            <div className="blur t-blur2" style={{background:'skyblue'}}></div>
        </div>

        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true}}
        >
            {client.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonials">
                              <img src={client.img} alt="" srcset="" />
                              <span>{client.review}</span>
                        </div>
                      
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonial