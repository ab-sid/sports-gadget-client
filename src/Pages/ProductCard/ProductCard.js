import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useSeller from '../hooks/useSeller';

const ProductCard = ({ product, setOrder }) => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email)
    const { image, conType, location, originalPrice, phone, postDate, productName, reselPrice, sellerName, useTime } = product;
    return (
        <div className="card bg-base-100 border">
            <figure><img className='w-full h-[300px]' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {productName}
                    <div className="badge badge-secondary">{conType}</div>
                </h2>

                <p>Location: {location}</p>
                <p>Original Price: {originalPrice}</p>
                <p>Resel Price: {reselPrice}</p>
                <p>Phone Used: {useTime} years</p>
                <h3>Seller Name: {sellerName}</h3>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{phone}</div>
                    <div className="badge badge-outline">{postDate}</div>
                </div>
                <div className="card-actions justify-end">
                    {
                        isSeller &&
                        <>
                            <label onClick={() => setOrder(product)} htmlFor="booking-modal" className="btn btn-primary mt-4" disabled>Book Now</label>
                        </>
                    }
                    {
                        !isSeller &&
                        <label onClick={() => setOrder(product)} htmlFor="booking-modal" className="btn btn-primary mt-4">Book Now</label>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductCard;