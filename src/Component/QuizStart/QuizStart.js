import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SetData from '../SetData/SetData';

const QuizStart = () => {

    const quiz = useLoaderData();
    // console.log(quiz.data.questions);
    const allQuiz = quiz.data.questions;
    return (
        <div>
            <h1>Start Now</h1>
            {
                allQuiz.map(set => <SetData
                    key={set.id}
                    set={set}
                ></SetData>)
            }
        </div>
    );
};

export default QuizStart;