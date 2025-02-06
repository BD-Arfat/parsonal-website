import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LayOuts from '../LayOuts/LayOuts';
import Home from '../Page/Home/Home/Home';

const Routs = createBrowserRouter([
    {
        path : '/',
        element :  <LayOuts></LayOuts>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            }
        ]
    }
])

export default Routs;