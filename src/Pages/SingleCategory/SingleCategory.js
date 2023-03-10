import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import BookingModal from '../BookingModal/BookingModal';
import useSeller from '../hooks/useSeller';
import ProductCard from '../ProductCard/ProductCard';

const SingleCategory = () => {
    const { user } = useContext(AuthContext);
    const { _id, name } = useLoaderData();
    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState(null);
    const [isSeller] = useSeller(user?.email);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://sports-gadget-reselling-server.vercel.app/product?productCat=${_id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [_id])
    const handleAddProducts = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const image = form.image.value;
        const location = form.location.value;
        const reselPrice = form.reselPrice.value;
        const originalPrice = form.originalPrice.value;
        const useTime = form.useTime.value;
        const postDate = form.postDate.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const conType = form.conType.value;
        const phone = form.phone.value;
        const description = form.description.value;

        const product = {
            productCat: _id,
            productName,
            image,
            location,
            reselPrice,
            originalPrice,
            useTime,
            postDate,
            sellerName,
            sellerEmail,
            conType,
            phone,
            description
        }
        fetch('https://sports-gadget-reselling-server.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Product added successfully');
                    form.reset();
                    navigate('/dashboard/myproducts');
                }
            })
    }
    return (
        <div>
            <div><h2 className='text-xl text-center font-bold my-8'>All Products of {name} Category</h2></div>
            <div className='grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductCard key={product._d} product={product} setOrder={setOrder}></ProductCard>)
                }
                {
                    order &&
                    <BookingModal order={order} setOrder={setOrder}></BookingModal>
                }
            </div>
            <div className='max-w-screen-xl mx-auto'>
                <h1 className='text-center text-3xl font-bold my-16'>Add Your Products</h1>
                <form onSubmit={handleAddProducts}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input type="text" name='productName' placeholder="Type product name" className="input input-bordered" />
                        <input type="text" name='image' placeholder="Type image link only" className="input input-bordered" />
                        <input type="text" name='location' placeholder="Type your location" className="input input-bordered" />
                        <input type="text" name='reselPrice' placeholder="Type product resel price" className="input input-bordered" />
                        <input type="text" name='originalPrice' placeholder="Type product original price" className="input input-bordered" />
                        <input type="text" name='useTime' placeholder="Type year of use" className="input input-bordered" />
                        <input type="date" name='postDate' placeholder="Type post date" className="input input-bordered" />
                        <input type="text" name='sellerName' placeholder="Type your name" defaultValue={user?.displayName} className="input input-bordered" />
                        <input type="email" name='sellerEmail' value={user?.email} className="input input-bordered" disabled />
                        <input type="text" name='conType' placeholder="Type your product condition" className="input input-bordered" />
                        <input type="text" name='phone' placeholder="Type your phone number" className="input input-bordered" />
                        <textarea className="textarea textarea-bordered" name='description' placeholder="Type product description"></textarea>
                    </div>
                    {
                        isSeller &&
                        <input className='btn btn-success my-3 text-white' type="submit" value="Add Product" />
                    }
                    {
                        !isSeller &&
                        <p className='text-success mb-4'>Your Accout must be a seller type account for adding any product!!</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default SingleCategory;