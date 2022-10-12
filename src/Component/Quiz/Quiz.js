import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Element from '../Element/Element';

const Quiz = () => {

    const items = useLoaderData();
    // // console.log(items)
    const elements = items.data;
    // console.log(elements)
    return (
        <div>
            <h1 className='text-9xl font-extrabold text-red-500'>QUICK QUIZE </h1>

            <div className='flex justify-center items-center mx-6 px-6'>
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