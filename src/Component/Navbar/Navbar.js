import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        { id: 1, name: "Home", path: '/home' },
        { id: 2, name: "Statistics", path: '/statistics' },
        { id: 3, name: "Blog", path: '/blog' }
    ]
    return (

        < nav >
            <ul className='md:flex justify-end'>

                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)

                }
            </ul>

        </nav >

    );
};

export default Navbar;