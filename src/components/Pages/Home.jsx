import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Slider from './../Elements/Slider';
import About from './../Elements/About';
import OurServices from './../Elements/OurServices';
import Callus from './../Elements/Callus';

class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Slider />
                    <div className="section-full p-b30">
                        <About/>
                    </div>
                    <div className="section-full p-tb5">
                        <OurServices />
                    </div>
                    <div className="section-full p-tb">
                        <Callus />
                    </div>
                </div>  
                <Footer />
            </>
        );
    };
};

export default Home;