import React from 'react';
import './Hero.css';
import video from '../../../assets/hero/video-2.mp4';

const Hero = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted playsInline className='back-video'>
                <source src={video} type='video/mp4' />
            </video>
            <div className='hidden md:block content'>
                <h1>Whatever You Want</h1>
                <a href="/">Explore</a>
            </div>
        </div>
    );
};

export default Hero;