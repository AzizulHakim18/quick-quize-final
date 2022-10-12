import React from 'react';

const SetData = ({ set }) => {
    const { correctAnswer, question, options } = set;
    return (
        <div>
            <h1>{question}</h1>
            <p>{correctAnswer}</p>
        </div>
    );
};

export default SetData;