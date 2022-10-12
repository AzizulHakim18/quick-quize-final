import React from 'react';
import Header from '../Header/Header';

const Blog = () => {
    return (
        <div>

            <div className='text-justify'>
                <div className='m-4 p-8 border rounded bg-slate-400'>
                    <h1 className='text-2xl text-red-800 font-extrabold	'>Purpose of React Router??</h1>
                    <p className='text-xl font-semibold	'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p><br />
                    <p className='text-xl font-semibold	'>At its heart, React Router is a state container for the current location , or URL. It keeps track of the location and renders different router s as it changes, and it also gives you tools to update the location using link s and the history API.</p>
                </div>
                <div className='m-4 p-8 border rounded bg-slate-400'>
                    <h1 className='text-2xl text-red-800 font-extrabold	'>How does context API work?</h1>
                    <p className='text-xl font-semibold	'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
                <div className='m-4 p-8 border rounded bg-slate-400'>
                    <h1 className='text-2xl text-red-800 font-extrabold	'> what is UseRef?</h1>
                    <p className='text-xl font-semibold	'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;