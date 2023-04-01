import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import { toast } from 'react-hot-toast';



const Header = () => {

    const { user, logout } = useContext(AuthContext);
    const name = user?.displayName;

    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success('Successfully Log Out')
            })
            .catch(error => console.log(error))
    }


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        {
                            user?.uid ? <div className='flex justify-center items-center'><li><Link onClick={handleLogout} to="/">Log Out</Link></li> </div> : <div><li><Link to="/login">Log In</Link></li></div>
                        }
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">Quick Quiz</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    {
                        user?.uid ? <div className='flex justify-center items-center'><li><Link onClick={handleLogout} to="/">Log Out</Link></li> </div> : <div><li><Link to="/login">Log In</Link></li></div>
                    }
                </ul>
            </div>
            <div>
                {
                    user?.uid ? (<div className="navbar-end">
                        <Link className="btn">{name}</Link>
                    </div>) : (<div className="navbar-end">
                        <Link className="btn">User Name</Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Header;