import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LayOuts from '../LayOuts/LayOuts';
import Home from '../Page/Home/Home/Home';
import Skills from '../Page/Skills/Skills';
import Services from '../Page/Services/Services';
import AboutPage from '../Page/AboutPage/AboutPage';

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
                path : '/abouts',
                element : <AboutPage></AboutPage>
            },
            {
                path : '/services',
                element : <Services></Services>
            }
        ]
    }
])

export default Routs;