import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Element from '../Element/Element';

const Quiz = () => {

    const items = useLoaderData();

    const elements = items.data;

    return (
        <div>
            <h1 className='font-family lg:text-6xl md:text-4xl sm:text-2xl font-bold text-red-500 my-10 py-4'>Explore Popular Courses</h1>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    elements.map(element => <Element
                        key={element.id}
                        element={element}

                    ></Element>)
                }
            </div>
        </div>
    );
};

export default Quiz;