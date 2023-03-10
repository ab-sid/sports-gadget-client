import React from 'react';
import Category from '../../Category/Category';
import Client from '../Client/Client';
import Hero from '../Hero/Hero';
import NewProduct from '../NewProduct/NewProduct';
import SiteVideo from '../SiteVideo/SiteVideo';
import Testimonial from '../Testimonial/Testimonial';
import Trust from '../Trust/Trust';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <NewProduct></NewProduct>
            <Category></Category>
            <Trust></Trust>
            <SiteVideo></SiteVideo>
            <Testimonial></Testimonial>
            <Client></Client>
        </div>
    );
};

export default Home;