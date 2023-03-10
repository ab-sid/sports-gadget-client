import React from 'react';
import { Link } from 'react-router-dom';

const OrderCard = ({ order }) => {
    console.log(order);
    const { _id, productName, price } = order;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Name: {productName}</h2>
                <p>Price: {price}</p>
                {
                    price && !order.paid && <Link to={`/dashboard/payment/${_id}`}>
                        <button className='btn btn-primary'>
                            Pay
                        </button>
                    </Link>
                }
                {
                    price && order.paid && <span className='text-green-500'>Paid</span>
                }
            </div>
        </div>
    );
};

export default OrderCard;