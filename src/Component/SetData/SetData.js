import React from 'react';

const SetData = ({ set }) => {
    const { correctAnswer, question, options } = set;
    return (
        <div className='bg-rose-300 m-2 p-4 border rounded w-full'>
            <h1>{question}</h1><br />
            <p>{options}</p><br />
            <button className='bg-slate-300 m-2 p-4 text-xl font-bold rounded'>correct ans</button>


        </div>
    );
};

export default SetData;