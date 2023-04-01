import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='md:flex justify-center items-center'>
            <div>
                <h1 className='text-2xl font-bold tracking-wider text-rose-500'>
                    Quick Quiz App
                </h1>
                <h2 className='text-4xl font-bold tracking-wider'>
                    More Than 25K+
                    Edu Courses Online
                </h2>
                <h3 className='text-xl font-semibold tracking-wider'>
                    Choose from over 250,000 online video courses with new additions published every month, high quality courses.
                    Get Started Now
                </h3>
                <Link to="/quiz" className="btn btn-outline btn-info"> Get Started</Link>
            </div>

            <div>
                <img src="https://img.freepik.com/free-vector/online-survey-analysis-electronic-data-collection-digital-research-tool-computerized-study-analyst-considering-feedback-results-analysing-info_335657-854.jpg?w=740&t=st=1680330370~exp=1680330970~hmac=f474d8af388efb25ee4e432b35b7920fbed46211d0b1670e1bc76d767dd81ebd" alt="" />
            </div>
        </div>
    );
};

export default Home;