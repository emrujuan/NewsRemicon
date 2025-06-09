import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import AboutCompany from '../Elements/AboutCompany';
// import Specialization2 from '../Elements/Specialization4';
import OurServices2 from '../Elements/OurServices';
import OurValue3 from '../Elements/OurValue3';
import OurProject3 from '../Elements/OurProject3';
import Faq from '../Elements/Faq';

import bnrimg from '../../images/banner/1.jpg';

class Services extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content">
                    <Banner title="Бид эх орныхоо дөрвөн зүгт хөгжлийг бүтээлцэнэ." pagename="Services" bgimage={bnrimg}/>
                    <AboutCompany />
                    <OurServices2 />
                    <OurValue3 />
                    <Faq />
                <Footer />
                    
                </div>

                
               

            </>
        );
    };
};

export default Services;