import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import './NavStyle';
import logo from '../../../assets/trust/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    useEffect(() => {
        function slidee() {
            const list = document.querySelectorAll('.list');
            function activeLink() {
                list.forEach((item) =>
                    item.classList.remove('active'));
                this.classList.add('active');
            }
            list.forEach((item) =>
                item.addEventListener('click', activeLink));
        }
        slidee();
    }, [])

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }
    return (
        <div className='bg-black nav-sec'>
            <div className='navigation bg-black'>
                <div className='flex items-center ml-3'>
                    <img className='w-[60px] rounded' src={logo} alt="" srcset="" />
                    <h2 className='font-bold'>Sports House</h2>
                </div>
                <ul>
                    <li className='list active'>
                        <Link to='/'>
                            <a>
                                <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
                                <span className='text'>Home</span>
                            </a>
                        </Link>
                    </li>
                    {user?.uid ?
                        <>
                            <li className='list'>
                                <Link to='/dashboard'>
                                    <a>
                                        <span className='icon'><ion-icon name="analytics-outline"></ion-icon></span>
                                        <span className='text'>Dashboard</span>
                                    </a>
                                </Link>
                            </li>
                            <li className='list'>
                                <button onClick={handleLogOut}>
                                    <a>
                                        <span className='icon'><ion-icon name="log-out-outline"></ion-icon></span>
                                        <span className='text'>LogOut</span>
                                    </a>
                                </button>
                            </li>
                        </>
                        :
                        <>
                            <li className='list'>
                                <Link to='/login'>
                                    <a>
                                        <span className='icon'><ion-icon name="log-in-outline"></ion-icon></span>
                                        <span className='text'>LogIn</span>
                                    </a>
                                </Link>
                            </li>
                        </>
                    }
                    <div className="indicator">

                    </div>
                </ul>
            </div>
        </div>


    );
};

export default Navbar;