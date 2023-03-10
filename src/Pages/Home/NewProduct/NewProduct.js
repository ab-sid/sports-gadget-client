import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './NewProduct.css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import img1 from '../../../assets/products/1.jpg';
import img2 from '../../../assets/products/2.jpg';
import img3 from '../../../assets/products/3.jpg';
import img4 from '../../../assets/products/4.jpg';
import img5 from '../../../assets/products/5.jpg';
import img6 from '../../../assets/products/6.jpg';
import img7 from '../../../assets/products/7.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
const NewProduct = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='container'>
            <div className='mb-8'>
                <h3 className='text-[15px] text-[#ff000a] text-center font-bold uppercase top-heading'>
                    <span>TRENDING</span>
                </h3>
                <h1 className="heading text-xl mt-4 text-center font-bold text-transform: uppercase;">New Arrival</h1>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={img1} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img7} alt="" srcset="" />
                </SwiperSlide>
                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">

                    </div>
                    <div className="swiper-button-next slider-arrow">

                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
};

export default NewProduct;