import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';

const QuizStart = () => {
    const quiz = useRouteLoaderData();
    console.log(quiz);
    return (
        <div>
            <h1>Start Now</h1>
        </div>
    );
};

export default QuizStart;