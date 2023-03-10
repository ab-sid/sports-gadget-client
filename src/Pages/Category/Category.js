import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://sports-gadget-reselling-server.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='max-w-screen-xl mx-auto'>
            <div className="cat-heading">
                <h3 className='text-[15px] text-[#ff000a] text-center font-bold uppercase top-heading'>
                    <span>All Your Demands</span>
                </h3>
                <h1 className="heading text-[17px] text-center font-semibold uppercase">Category</h1>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
                {
                    categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;