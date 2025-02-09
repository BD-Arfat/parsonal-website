import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LayOuts from '../LayOuts/LayOuts';
import Home from '../Page/Home/Home/Home';
import Skills from '../Page/Skills/Skills';
import Services from '../Page/Services/Services';

const Routs = createBrowserRouter([
    {
        path : '/',
        element :  <LayOuts></LayOuts>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/skills',
                element : <Skills></Skills>
            },
            {
                path : '/services',
                element : <Services></Services>
            }
        ]
    }
])

export default Routs;