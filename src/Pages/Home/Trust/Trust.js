import React, { useEffect } from 'react';
import img from '../../../assets/trust/0.jpg';
import img1 from '../../../assets/trust/1.jpg';
import img2 from '../../../assets/trust/2.jpg';
import img3 from '../../../assets/trust/3.jpg';
import './Trust.css';
import { FaAngleRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Trust = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className='block md:flex justify-between mt-36 max-w-screen-xl mx-auto'>
            <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className='w-[100%] md:w-[25%] mr-12'>
                <img className='w-[100%] md:w-[301px] md:h-[398px] mb-4' src={img} alt="" />
                <p className='tracking-wider mb-6'>Eget magna fermentum iaculis eu non. Id velit ut tortor pretium viverra. Nam libero justo laoreet sit amet cursus sit amet.</p>
                <a className='text-red-600 inline-flex items-center shop-now' href="/">SHOP THE LOOK<FaAngleRight className='ml-2 text-[17px]'></FaAngleRight></a>
            </div>
            <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className='w-[100%] md:w-[75%]'>
                <h3 className='text-red-600 font-semibold text-[17px] tracking-widest trust-heading'><span>FAST AND FURIOUS.</span></h3>
                <h2 className='text-4xl font-bold my-4'>TRUSTED BY WORLD WIDE SPORTS PERSONS & ACCADEMY.</h2>
                <p className='tracking-wider'>Fusce ornare metus facilisis finibus tristique. Suspendisse fringilla elit eu tellus sodales accumsan. Donec eu orci sed augue mollis gravida. Curabitur interdum magna erat, non finibus ipsum laoreet et. Maecenas lectus nunc, sodales nec felis efficitur porta felis. Phasellus aliquam maximus quam, sed facilisis lorem congue eu. Donec mattis justo ut nulla.</p>
                <a className='btn btn-primary my-12 rounded-none bg-red-600 border-none' href="/">Explore Now</a>
                <div className='md:flex justify-between'>
                    <img className='w-full md:w-[301px] h-[398px] mb-4' src={img1} alt="" />
                    <img className='w-full md:w-[301px] h-[398px] mb-4' src={img2} alt="" />
                    <img className='w-full md:w-[301px] h-[398px] mb-4' src={img3} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Trust;