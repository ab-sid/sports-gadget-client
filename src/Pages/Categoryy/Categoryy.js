import React from 'react';
import './Categoryy.css';
import img from '../../assets/products/5.jpg'

const Categoryy = () => {
    return (
        <div className="cardd">
            <div className="imgBx">
                <img src={img} alt="" srcset="" />
            </div>
            <div className="contentBx">
                <h3>djsd</h3>
                <h2 className='price'>$40.<small>99</small></h2>
                <a href="" className='buy'>See More</a>
            </div>
        </div>
    );
};

export default Categoryy;