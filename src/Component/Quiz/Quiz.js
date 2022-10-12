import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Element from '../Element/Element';

const Quiz = () => {

    const items = useLoaderData();
    const elements = items.data;
    return (
        <div>
            <h1>this is the quiz section {items.data.length}</h1>

            <div className='flex justify-center items-center mx-6 px-6'> {
                elements.map(element => <Element
                    key={element.id}
                    element={element}

                ></Element>)
            }</div>
        </div>
    );
};

export default Quiz;