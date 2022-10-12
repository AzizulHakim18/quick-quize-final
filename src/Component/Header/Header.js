import React from 'react';
import {
    Link,
} from "react-router-dom";


const Header = () => {
    return (
        <div className='flex justify-around items-center w-full bg-green-400 border-2 rounded border-slate-400'>
            <div>
                <h1 className='m-2 p-4 text-xl font-bold'>QUICK QUIZ</h1>
            </div>

            <div className='no-underline m-2 p-4'>
                <Link className='m-2 p-4 text-xl font-bold bg-red-600 rounded text-white hover:bg-white hover:text-red-600' to='/quiz'>Quiz</Link>
                <Link className='m-2 p-4 text-xl font-bold bg-red-600 rounded text-white hover:bg-white hover:text-red-600' to='/statistics'>Statistics</Link>
                <Link className='m-2 p-4 text-xl font-bold bg-red-600 rounded text-white hover:bg-white hover:text-red-600' to='/blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Header;