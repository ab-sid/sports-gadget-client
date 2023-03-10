import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../../assets/brand/adidas.png';
import img2 from '../../../assets/brand/armour.png';
import img3 from '../../../assets/brand/champion.png';
import img4 from '../../../assets/brand/fila.png';
import img5 from '../../../assets/brand/lula.png';
import img6 from '../../../assets/brand/nike.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1

    };
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section data-aos="zoom-in" className='mt-24'>
            <div className="testimonial-heading">
                <h3 className='text-[15px] text-[#ff000a] text-center font-bold uppercase top-heading'>
                    <span>brand</span>
                </h3>
                <h1 className="heading text-[15px] text-center font-semibold uppercase">Brand We Work With</h1>
            </div>
            <div className="">
                <Slider {...settings} className='mt-24'>
                    <div className='ml-24'>
                        <img className='w-1/2 m-0 p-0' src={img1} alt="" />
                    </div>
                    <div className='ml-24'>
                        <img className='w-1/2 m-0 p-0' src={img2} alt="" />
                    </div>
                    <div className='ml-24'>
                        <img className='w-1/2 m-0 p-0' src={img3} alt="" />
                    </div>
                    <div className='ml-24'>
                        <img className='w-1/2 m-0 p-0' src={img4} alt="" />
                    </div>
                    <div className='ml-24'>
                        <img className='w-1/2 m-0 p-0' src={img5} alt="" />
                    </div>
                    <div className='ml-24'>
                        <img className='w-1/2 m-0 p-0' src={img6} alt="" />
                    </div>
                    {/* <div className="card bg-base-100 border">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div> */}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonial;