import React, { useEffect, useState } from 'react';
import Link from '../PLink/PLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: "Home", path: '/home' },
        { id: 2, name: "Statistics", path: '/statistics' },
        { id: 3, name: "Blog", path: '/blog' }
    ]
    return (

        < nav className='bg-purple-200 h-16' >

            <div onClick={() => setOpen(!open)} className="h-10 w-10 text-black m-0 md:hidden" >
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>
            <div>

                <ul className={`bg-purple-200 md:flex w-full justify-end items-center py-4 md:static absolute duration-500 ease-in ${open ? 'top-12' : 'top-[-120px]'}`}>

                    {
                        routes.map(route => <Link key={route.id} route={route}></Link>)

                    }
                </ul>
            </div>



        </nav >

    );
};

export default Navbar;