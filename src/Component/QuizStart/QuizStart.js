import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const QuizStart = () => {

    const quiz = useLoaderData();
    console.log(quiz.data.questions);
    const questions = quiz.data.questions


    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    })
    const { question, options, correctAnswer } = questions[activeQuestion]
    const htmlString = question;
    const div = document.createElement("div");
    div.innerHTML = htmlString;
    const mainText = div.textContent;

    const onClickNext = () => {
        setSelectedAnswer(null)
        setResult((prev) =>
            selectedAnswer
                ? {
                    ...prev,
                    score: prev.score + 5,
                    correctAnswers: prev.correctAnswers + 1,

                } : {
                    ...prev, wrongAnswers: prev.wrongAnswers + 1
                }

        )

        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1)
        } else {
            setActiveQuestion(0)
            setShowResult(true)
        }
    }





    const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index)
        if (answer === correctAnswer) {
            setSelectedAnswer(true)
            console.log('right')
        } else {
            setSelectedAnswer(false)
            console.log('wrong')
        }
    }

    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)





    return (
        <div>
            {!showResult ? (
                <div className='lg:w-3/4 sm:w-full mx-auto bg-teal-400 md:p-10  border rounded-lg shadow-lg shadow-cyan-500/50'>
                    <h1 className='font-family text-xl font-bold text-center'>Start Now</h1>
                    <div className='flex justify-between text-lg font-semibold text-slate-200 py-2'>
                        <h3>Quiz No {addLeadingZero(activeQuestion + 1)}</h3>
                        <h3>
                            <span>
                                Question {addLeadingZero(activeQuestion + 1)}
                            </span> <span >
                                out of {addLeadingZero(questions.length)}
                            </span>
                        </h3>
                    </div>
                    <h2 className='text-2xl font-bold md:mx-6 p-2'>{mainText}</h2>

                    <ol>
                        {options.map((answer, index) => (
                            <li onClick={() => { onAnswerSelected(answer, index) }}
                                key={answer}
                                className={selectedAnswerIndex === index ? "bg-slate-300 border rounded-lg " : null}
                            ><button className="btn btn-outline w-full my-3">{answer}</button></li>
                        ))}
                    </ol>
                    <div className='flex justify-center'>
                        <button onClick={onClickNext}
                            disabled={selectedAnswerIndex === null}
                            className='btn btn-outline '
                        >{activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                        </button>
                    </div>
                </div>

            ) : (
                <div className='lg:w-3/4 sm:w-full mx-auto bg-teal-400 p-10 border rounded-lg shadow-lg shadow-cyan-500/50'>
                    <h3 className='font-family text-xl font-bold text-center text-rose-500'>Result</h3>
                    <p className='text-2xl font-bold '>
                        Total Question: <span>{questions.length}</span>
                    </p>
                    <p className='text-2xl font-bold '>
                        Total Score:<span> {result.score}</span>
                    </p>
                    <p className='text-2xl font-bold '>
                        Correct Answers:<span> {result.correctAnswers}</span>
                    </p>
                    <p className='text-2xl font-bold'>
                        Wrong Answers:<span> {result.wrongAnswers}</span>
                    </p>
                </div>
            )
            }
        </div>
    );
};

export default QuizStart;