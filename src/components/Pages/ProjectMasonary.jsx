import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

import bnrimg from '../../images/banner/1.jpg';
import pic4 from '../../images/projects/portrait/pic4.jpg';
import pic1 from '../../images/projects/portrait/pic1.jpg';
import pic7 from '../../images/projects/portrait/pic7.jpg';
import pic9 from '../../images/projects/portrait/pic9.jpg';
import pic5 from '../../images/projects/portrait/pic5.jpg';
import pic6 from '../../images/projects/portrait/pic6.jpg';
import pic3 from '../../images/projects/portrait/pic3.jpg';

const filters = [
    { label: "Construction", filter: ".cat-1" },
    { label: "Renovation", filter: ".cat-2" },
    { label: "Outdoor", filter: ".cat-3" },
    { label: "Interiors", filter: ".cat-4" },
    { label: "Consulting", filter: ".cat-5" },
    
];

const projects = [
    {
        thumb: pic4,
        image: pic4,
        title: 'Life style building',
        description: 'Engineering your dreams with us.',
        filter: 'cat-1'
    },
    {
        thumb: pic1,
        image: pic1,
        title: 'Central City Building',
        description: 'Engineering your dreams with us.',
        filter: 'cat-2'
    },
    {
        thumb: pic7,
        image: pic7,
        title: 'Nathan Brooke House',
        description: 'Engineering your dreams with us.',
        filter: 'cat-3'
    },
    {
        thumb: pic9,
        image: pic9,
        title: 'Metropolitan Museum',
        description: 'Engineering your dreams with us.',
        filter: 'cat-4'
    },
    {
        thumb: pic3,
        image: pic3,
        title: 'Art Family Residence',
        description: 'Engineering your dreams with us.',
        filter: 'cat-5'
    },
    {
        thumb: pic3,
        image: pic3,
        title: 'Office Partition Walls',
        description: 'Engineering your dreams with us.',
        filter: 'cat-4'
    },
    {
        thumb: pic5,
        image: pic5,
        title: 'Glass Office Screen',
        description: 'Engineering your dreams with us.',
        filter: 'cat-3'
    },
    {
        thumb: pic6,
        image: pic6,
        title: 'State Hermitage Museum',
        description: 'Engineering your dreams with us.',
        filter: 'cat-2'
    },
    {
        thumb: pic6,
        image: pic6,
        title: 'Central Florida University',
        description: 'Engineering your dreams with us.',
        filter: 'cat-1'
    },
    {
        thumb: pic6,
        image: pic6,
        title: 'Life style building',
        description: 'Engineering your dreams with us.',
        filter: 'cat-2'
    },
    {
        thumb: pic6,
        image: pic6,
        title: 'Nathan Brooke House',
        description: 'Engineering your dreams with us.',
        filter: 'cat-3'
    }
]

class ProjectMasonary extends React.Component {
    
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
                <Header />
                <div className="page-content">
                <Banner title="Creating quality urban lifestyles, building stronger communities." pagename="Project Masonry" bgimage={bnrimg}/>
                    
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 bg-gray inner-page-padding">
                        {/* GALLERY CONTENT START */}
                        <div className="container-fluid">
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
                                    <div key={index} className={`${item.filter} masonry-item col-lg-3  col-md-4 col-sm-6 m-b30`}>
                                        <div className="image-effect-one hover-shadow">
                                            <img src={item.thumb} alt="" />
                                            <div className="figcaption">
                                                <h4>{item.title}</h4>
                                                <p>{item.description}</p>
                                                <NavLink to="/project-detail"><i className="link-plus bg-primary" /></NavLink>
                                            </div>
                                            <a className="mfp-link" href={item.image}>
                                                <i className="fa fa-arrows-alt" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                               
                            </div>
                            {/* GALLERY CONTENT END */}
                            <div className="m-t50 text-center">
                                <NavLink to={"#"} className="site-button btn-effect">Load More</NavLink>
                            </div>
                        </div>
                        {/* GALLERY CONTENT END */}
                    </div>
                    {/* SECTION CONTENT END  */}
                </div>

                <Footer />
            </>
        );
    };
};

export default ProjectMasonary;