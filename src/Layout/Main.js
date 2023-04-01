import React from 'react';
import Header from '../Component/Header/Header';
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-3/5 mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;