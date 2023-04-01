import logo from './logo.svg';
import './App.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Blog from './Component/Blog/Blog';
import Main from './Layout/Main';
import { useState } from 'react';
import Quiz from './Component/Quiz/Quiz';
import QuizStart from './Component/QuizStart/QuizStart';
import Home from './Component/Home';

function App() {
  const [open, setOpen] = useState(false)

  const router = createBrowserRouter([

    {
      path: '/', element: <Main></Main>, children: [

        {
          path: '/', loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          }, element: <Home></Home>
        },
        {
          path: '/quiz',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Quiz></Quiz>
        },
        {
          path: '/quiz/:elementId',
          loader: async ({ params }) => {
            // console.log(params.elementId);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.elementId}`);
          },
          element: <QuizStart></QuizStart>
        },
        { path: '/blog', element: <Blog></Blog> }
      ]
    },
    { path: '*', element: <div><span className='text-7xl text-bold'>404</span>   This route not found</div> }
  ])
  return (
    <div >

      <div> <RouterProvider router={router}></RouterProvider></div>
    </div>
  );
}

export default App;
