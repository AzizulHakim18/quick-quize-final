import React from 'react';
import { Link } from 'react-router-dom';

const Element = ({ element }) => {
    const { id, name, logo, total } = element;
    return (
        <div >
            <div className='m-4 p-4 border rounded border-teal-500'>
                <img src={logo} alt="" />
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-bold text-red-500'> {name}</h1>
                    <Link to={`/element/${id}`} className='m-2 p-4 text-white text-xl font-bold bg-cyan-500 border rounded '>Get Start</Link>
                </div>
            </div>
        </div>
    );
};

export default Element;