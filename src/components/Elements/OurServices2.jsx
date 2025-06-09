import React from 'react';
import { NavLink } from 'react-router-dom';

import pic1 from '../../images/icon/crane-1.png';
import pic2 from '../../images/icon/renovation.png';
import pic3 from '../../images/icon/toolbox.png';
import pic4 from '../../images/icon/compass.png';
import pic5 from '../../images/icon/idea.png';
import pic6 from '../../images/icon/dump-truck.png';
import pic7 from '../../images/icon/architecture.png';
import pic8 from '../../images/icon/planning.png';

const services = [
    {
        count: 1,
        title: 'Building Construction',
        icon: pic1,
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    },
    {
        count: 2,
        title: 'Building Renovation',
        icon: pic2,
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    },
    {
        count: 3,
        title: 'Building Maintenance',
        icon: pic3,
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    },
    {
        count: 4,
        title: 'Architecture Design',
        icon: pic4,
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    },
    {
        count: 5,
        title: 'Construction Consultant',
        icon: pic5,
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    },
    {
        count: 6,
        title: 'Material Supply',
        icon: pic6,
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    },
    {
        count: 7,
        title: 'House Renovation',
        icon: pic7,
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    },
    {
        count: 8,
        title: 'Interior Design',
        icon: pic8,
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    }
]

import img1 from '../../images/background/ptn-1.png';

class OurServices2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white mobile-page-padding" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="section-content">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head m-b50">
                                <div className="mt-separator-outer separator-left">
                                    <div className="mt-separator">
                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Services</h2>
                                    </div>
                                </div>
                                <h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</h3>
                            </div>
                            {/* TITLE END */}
                            <div className="row services-v2 no-col-gap">
                            {services.map((item, index) => (
                                <div className="col-md-3 col-sm-6 col-xs-6 col-xs-100pc" key={index}>
                                    <div className="mt-icon-box-wraper bdr-l-1 bdr-solid bdr-gray">
                                        <div className="relative  p-a30">
                                            <div className="icon-md inline-icon m-b15 text-primary scale-in-center">
                                                <span className="icon-cell"><img src={item.icon} alt="" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="mt-tilte m-b25">{item.title}</h4>
                                                <p>{item.description}</p>
                                                <NavLink to={"/services"} className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    ))}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default OurServices2;