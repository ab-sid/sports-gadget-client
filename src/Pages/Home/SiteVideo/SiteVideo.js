import React, { useEffect } from 'react';
import './SiteVideo.css';
import { AiFillPlayCircle } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SiteVideo = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section data-aos="flip-right" className='bg-img mt-24  mb-4 flex items-center justify-center'>
            <div className='hidden md:block first-part w-[60%] py-24'>
                <h3 className='text-[#ca020b] mb-4 tracking-widest font-semibold text-[17px]'>SQUAT PROOF</h3>
                <h2 className='text-white mb-4 text-[40px] font-bold'>SOFT & DURABLE LEGGINGS</h2>
                <p className='w-[68%] text-[17px] mb-8 text-white'>Pellentesque ultricies convallis leo, sit amet rhoncus efficitur et. Sed gravida convallis lacus, sit amebt auctor ollis eget dapibus odio. Nulla vulputate diam at urna laoreet.</p>
                <a className='btn btn-primary rounded-none border-none bg-[#ca020b] w-[120px]' href="/">GEAR UP</a>
            </div>
            <div className='second-part w-[40%] flex items-center'>
                <h3 className='text-[#ca020b] text-[17px] font-bold'>Play Video</h3>
                <p className='text-6xl -ml-2 text-[#ca020b]'><AiFillPlayCircle></AiFillPlayCircle></p>
            </div>
        </section>
    );
};

export default SiteVideo;