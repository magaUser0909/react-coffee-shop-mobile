import React from 'react';

import { Routes, Route } from 'react-router-dom';

import OnBoarding from "../layout/navigation/OnBoarding";
import Home from "../layout/navigation/Home";
import Login from "../layout/navigation/Login";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<OnBoarding />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home/:coffeeId?/:order?' element={<Home />} />
        </Routes>
    )
}

export default AppRoutes