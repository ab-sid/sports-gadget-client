import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51MjcDPGSr2sfwj4uuqLxnLMYTCCvuNqFaC9zHMMy345nyHaWRRjFXCNSGEwWFI9l7RWvUQYe9NAZshHniOad0F1a00SyBhjYoD');

const Payment = () => {
    const booking = useLoaderData()
    const { price, productName } = booking;
    return (
        <div>
            <p className='text-2xl'>Please pay ${price} for your {productName}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;