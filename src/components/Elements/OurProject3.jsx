import React from 'react';
import { NavLink } from 'react-router-dom';

import pic1 from '../../images/services/service-projects/shooping-mall.jpg';
import pic2 from '../../images/services/service-projects/hospital.jpg';
import pic3 from '../../images/services/service-projects/garden-house.jpg';
import pic4 from '../../images/services/service-projects/villa.jpg';
import pic5 from '../../images/services/service-projects/road-construction.jpg';
import pic6 from '../../images/services/service-projects/bridge.jpg';
import pic7 from '../../images/services/service-projects/building-ren.jpg';
import pic8 from '../../images/services/service-projects/dam-construction.jpg';

const filters = [
    { label: "Construction", filter: ".cat-1" },
    { label: "Renovation", filter: ".cat-2" },
    { label: "Outdoor", filter: ".cat-3" },
    { label: "Interiors", filter: ".cat-4" },
    { label: "Consulting", filter: ".cat-5" },

];

const projects = [
    {
        image: pic1,
        title: 'Shopping Mall',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-1'
    },
    {
        image: pic2,
        title: 'Hospital Building',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-2'
    },
    {
        image: pic3,
        title: 'Garden House',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-3'
    },
    {
        image: pic4,
        title: 'Villa',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-4'
    },
    {
        image: pic5,
        title: 'Road Construction',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-5'
    },
    {
        image: pic6,
        title: 'Bridge Construction',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-4'
    },
    {
        image: pic7,
        title: 'Building Renovation',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-3'
    },
    {
        image: pic8,
        title: 'Dam Construction',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-2'
    },
]

import img1 from '../../images/background/bg5.jpg';

class OurProject3 extends React.Component {
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/masonary.js');

    };
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-parallax bg-cover mobile-page-padding" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator text-white">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Project</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* PAGINATION START */}
                        <div className="filter-wrap p-b15 center">
                            <ul className="masonry-filter link-style  text-uppercase white">
                                <li className="active"><NavLink to={"#"} data-filter="*" data-hover="All">All</NavLink></li>
                                {filters.map((item, index) => (
                                    <li key={index}><NavLink to={"#"} data-filter={item.filter} data-hover={item.label}>{item.label}</NavLink></li>
                                ))}

                            </ul>
                        </div>
                        {/* PAGINATION END */}
                        {/* GALLERY CONTENT START */}
                        <div className="portfolio-wrap mfp-gallery work-grid row clearfix">
                            {projects.map((item, index) => (
                                <div key={index} className={`${item.filter} masonry-item col-md-3 col-sm-6 m-b30`}>
                                    <div className="mt-box   image-hover-block">
                                        <div className="mt-thum-bx">
                                            <img src={item.image} alt=""/>
                                        </div>
                                        <div className="mt-info  p-t20 text-white">
                                            <h4 className="mt-tilte m-b10 m-t0">{item.title}</h4>
                                            <p className="m-b0">{item.address}</p>
                                        </div>
                                        <NavLink to="/project-detail"></NavLink>
                                    </div>
                                </div>
                            ))}

                        </div>
                        {/* GALLERY CONTENT END */}
                    </div>
                </div>
            </>
        );
    }
};

export default OurProject3;