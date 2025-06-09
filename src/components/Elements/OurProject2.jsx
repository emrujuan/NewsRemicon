import React from 'react';
import { NavLink } from 'react-router-dom';

import pic2 from '../../images/projects/square/pic2.jpg';
import pic3 from '../../images/projects/square/pic3.jpg';
import pic4 from '../../images/projects/square/pic4.jpg';
import pic5 from '../../images/projects/square/pic5.jpg';
import pic6 from '../../images/projects/square/pic6.jpg';
import pic7 from '../../images/projects/square/pic7.jpg';

const filters = [
    { label: "Construction", filter: ".cat-1" },
    { label: "Renovation", filter: ".cat-2" },
    { label: "Outdoor", filter: ".cat-3" },
    { label: "Interiors", filter: ".cat-4" },
    { label: "Consulting", filter: ".cat-5" },
    
];

const projects = [
    {
        image: pic4,
        title: '2-storey House',
        category: 'Construction, interior',
        filter: 'cat-1'
    },
    {
        image: pic2,
        title: 'City Buildings',
        category: 'Buildings, Engineering',
        filter: 'cat-2'
    },
    {
        image: pic3,
        title: 'Living room',
        category: 'Aqaba, Jordan',
        filter: 'cat-3'
    },
    {
        image: pic5,
        title: 'Bridge Architecture',
        category: 'Design and Construction',
        filter: 'cat-4'
    },
    {
        image: pic7,
        title: 'Feugiat nulla',
        category: 'Engineering, interior',
        filter: 'cat-5'
    },
    {
        image: pic6,
        title: 'Skeptic cambridge',
        category: 'Construction',
        filter: 'cat-4'
    }
]

class OurProject2 extends React.Component {
    
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
                <div className="section-full p-t80 p-b30 square_shape2 mobile-page-padding">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Project</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="filter-wrap text-center">
                                <ul className="filter-navigation inline-navigation masonry-filter link-style  text-uppercase">
                                    <li className="active"><NavLink to={"#"} data-filter="*" data-hover="All">All</NavLink></li>
                                    {filters.map((item, index) => (
                                    <li key={index}><NavLink to={"#"} data-filter={item.filter} data-hover={item.label}>{item.label}</NavLink></li>
                                    ))}                            
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="section-content">
                            <div className="portfolio-wrap row mfp-gallery product-stamp clearfix">
                                {projects.map((item, index) => (
                                    <div key={index} className={`${item.filter} masonry-item col-md-4 col-sm-6 m-b30`}>
                                        <div className="image-effect-one hover-shadow">
                                            <img src={item.image} alt="" />
                                            <div className="figcaption">
                                                <h4>{item.title}</h4>
                                                <p>{item.category}</p>
                                                <NavLink to="/project-detail"><i className="link-plus bg-primary" /></NavLink>
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

export default OurProject2;