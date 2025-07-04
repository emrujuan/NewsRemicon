import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Error from './Pages/Error';
import ContactUs from './Pages/ContactUs';

import ProjectGrid from './Pages/ProjectGrid';
import ScrollToTop from './Common/ScrollToTop';
import Tools from './Pages/Tools';

class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <ScrollToTop />
                <div className="page-wraper">
                        <Routes>
                            <Route path="/"  element={<Home/>} />

                            <Route path='/about' element={<About/>} />
                            <Route path='/services' element={<Services/>} />
                            <Route path='/tools' element={<Tools/>} />
                            <Route path='/contactus' element={<ContactUs/>} />
                            <Route path='/project-grid' element={<ProjectGrid/>} />
                            <Route path='/error' element={<Error/>} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                </div>
            </BrowserRouter>
        );
    };
};

export default Components;