import logo from './logo.svg';
import './App.css';
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
import Registration from './Component/Sheared/Registration';
import Login from './Component/Sheared/Login';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './Component/PrivateRoute';

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
          element: <PrivateRoute> <QuizStart></QuizStart></PrivateRoute>
        },
        { path: '/blog', element: <Blog></Blog> },
        { path: '/registration', element: <Registration></Registration> },
        { path: '/login', element: <Login></Login> },
      ]
    },
    { path: '*', element: <div><span className='text-7xl text-bold'>404</span>   This route not found</div> }
  ])
  return (
    <div >

      <div> <RouterProvider router={router}></RouterProvider> <Toaster></Toaster></div>
    </div>
  );
}

export default App;
