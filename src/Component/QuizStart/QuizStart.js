import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizStart = () => {
    // const quiz = useRouteLoaderData();
    // console.log(quiz);
    const quiz = useLoaderData();
    console.log(quiz);
    return (
        <div>
            <h1>Start Now</h1>
        </div>
    );
};

export default QuizStart;