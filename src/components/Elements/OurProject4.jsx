import React from 'react';
import { NavLink } from 'react-router-dom';

import pic1 from '../../images/projects/portrait/pic1.jpg';
import pic2 from '../../images/projects/portrait/pic2.jpg';
import pic3 from '../../images/projects/portrait/pic3.jpg';
import pic4 from '../../images/projects/portrait/pic4.jpg';
import pic5 from '../../images/projects/portrait/pic5.jpg';
import pic6 from '../../images/projects/portrait/pic6.jpg';
import pic7 from '../../images/projects/portrait/pic7.jpg';
import pic8 from '../../images/projects/portrait/pic8.jpg';
import pic9 from '../../images/projects/portrait/pic9.jpg';

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
        image2: pic4,
        title: 'Life style building',
        description: 'We are so busy watching out for what\'s just ahead of us that we don\'t take the time to enjoy where we are.',
        filter: 'cat-1'
    },
    {
        image: pic2,
        image2: pic9,
        title: 'Central City Building',
        description: 'We are so busy watching out for what\'s just ahead of us that we don\'t take the time to enjoy where we are.',
        filter: 'cat-2'
    },
    {
        image: pic3,
        image2: pic6,
        title: 'Nathan Brooke House',
        description: 'We are so busy watching out for what\'s just ahead of us that we don\'t take the time to enjoy where we are.',
        filter: 'cat-3'
    },
    {
        image: pic4,
        image2: pic5,
        title: 'Metropolitan Museum',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-4'
    },
    {
        image: pic5,
        image2: pic7,
        title: 'Art Family Residence',
        description: 'We are so busy watching out for what\'s just ahead of us that we don\'t take the time to enjoy where we are.',
        filter: 'cat-5'
    },
    {
        image: pic6,
        image2: pic8,
        title: 'Office Partition Walls',
        description: 'We are so busy watching out for what\'s just ahead of us that we don\'t take the time to enjoy where we are.',
        filter: 'cat-4'
    }
]

class OurProject4 extends React.Component {
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
                <div className="section-full p-t80 p-b50 bg-gray mobile-page-padding">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="mt-separator-outer separator-center">
                                    <div className="mt-separator">
                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Projects</h2>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            {/* PAGINATION START */}
                            <div className="filter-wrap p-b30 text-center">
                                <ul className="filter-navigation inline-navigation masonry-filter link-style  text-uppercase">
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
                                    <div key={index} className={`${item.filter} masonry-item col-md-4 col-sm-6 m-b30`}>
                                        <div className="image-effect-two hover-shadow">
                                            <img src={item.image} alt="" />
                                            <div className="figcaption">
                                                <h4 className="mt-tilte">{item.title}</h4>
                                                <p>{item.description}</p>
                                                <NavLink to="/project-detail" className="read-more site-button btn-effect">Read More</NavLink>
                                                <a className="mfp-link" href={item.image2}>
                                                    <i className="fa fa-arrows-alt" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* GALLERY CONTENT END */}
                            <div className="m-t50 text-center">
                                <NavLink to={"#"} className="site-button btn-effect">Load More</NavLink>
                            </div>
                        </div>
                    </div>    
            </>
        );
    }
};

export default OurProject4;