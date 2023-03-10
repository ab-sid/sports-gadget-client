import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../hooks/useToken';

const SignUp = () => {
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const { register, formState: { error }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    // const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();

    // if (token) {
    //     navigate('/');
    // }

    const handleSignup = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.category);
                        navigate('/login');
                    })
                    .catch(error => console.log(error));

            })
            .catch(error => console.log(error))
    }
    const saveUser = (name, email, category) => {
        const user = { name, email, category };
        fetch('https://sports-gadget-reselling-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);

            })
    }
    return (
        <div className='flex justify-center items-center mb-12'>
            <div className='p-12 px-16 border-2 rounded-lg'>
                <h2 className='text-3xl text-center font-bold mb-6'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email")} className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <select {...register("category", { required: true })} className="input input-bordered w-full max-w-xs my-4">
                        <option disabled selected>Select Users</option>
                        <option value='seller'>Seller</option>
                        <option value='buyer'>Buyer</option>
                    </select>

                    <input className='btn btn-accent w-full mb-4 text-white' value='SignUp' type="submit" />
                </form>
                <p>Already have an account? <Link className='text-accent' to='/login'>Login</Link></p>
            </div>
        </div >
    );
};

export default SignUp;