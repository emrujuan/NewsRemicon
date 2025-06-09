import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import About3 from './../Elements/About3';
import Specialization4 from './../Elements/Specialization4';
import Team3 from './../Elements/Team3';
import AboutSummary from './../Elements/AboutSummary';

// import bnrimg from '../../images/banner/1.jpg';
import bnrimg from '../../../Data/bgr.jpg'

class About extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content">
                    <Banner title="Ньюс ремикон ХХК нь барилга угсралтын үндсэн материал болох бетон зуурмагийн үйлдвэрлэлийн чиглэлээр үйл ажиллагаа эрхлэн явуулдаг.Монголын 100% хөрөнгө оруулалттай компани юм. Анх 2011 онд байгуулагдаж  одоог хүртэл бетон зуурмагийн салбартаа тасралтгүй үйл ажиллагаа явуулж байна." pagename="About Us" bgimage={bnrimg}/>
                    <About3/>
                    <Specialization4 />
                    <Team3 />
                    <AboutSummary />

                </div>

                <Footer />

            </>
        );
    };
};

export default About;