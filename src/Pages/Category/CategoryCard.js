import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
    const { _id, name, img } = category;
    return (
        <div className="cardd">
            <div className="imgBx">
                <img src={img} alt="" srcset="" />
            </div>
            <div className="contentBx">
                <h3 className='mt-4'>{name}</h3>
                <a href="" className='buy'><Link to={`/category/${_id}`}>See More</Link></a>
            </div>
        </div>
    );
};

export default CategoryCard;