import React from 'react';
import { NavLink } from 'react-router-dom';

import bnr1 from '../../../Data/uria.jpg';

class Callus extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding p-tb80 overlay-wraper bg-cover bg-center" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                    <div className="overlay-main bg-dark opacity-07" />
                    <div className="container">
                        <div className="section-content">
                            <div className="call-us-section text-center">
                                <h4 className="m-b15 text-white ">Тантай хамтарч ажиллахад бид бэлэн</h4>
                                <h2 className="call-us-number m-b15 m-b0 text-white">9105-5595</h2>
                                <h4 className="call-us-address m-t0 m-b20 text-white">Хан-Уул дүүрэг, 21-р хороо, Өлзийтийн зам, 951-1 тоот</h4>
                                <NavLink to="/contactus" className="site-button-secondry btn-effect bg-dark">Холбоо барих</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Callus;