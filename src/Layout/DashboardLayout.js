import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../Pages/hooks/useAdmin';
import useBuyer from '../Pages/hooks/useBuyer';
import useSeller from '../Pages/hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-green-50 text-base-content">
                        {
                            isAdmin && <>
                                <li className='bg-gray-200 rounded mb-4'><Link to='/dashboard/users'>All Users</Link></li>
                                <li className='bg-gray-200 rounded mb-4'><Link to='/dashboard/allseller'>All Sellers</Link></li>
                                <li className='bg-gray-200 rounded mb-4'><Link to='/dashboard/allbuyer'>All Buyers</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li className='bg-gray-200 rounded mb-4'><Link to='/dashboard/myproducts'>My Products</Link></li>
                            </>
                        }
                        {
                            isBuyer && <>
                                <li className='bg-gray-200 rounded mb-4'><Link to='/dashboard/myorders'>My Orders</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default DashboardLayout;