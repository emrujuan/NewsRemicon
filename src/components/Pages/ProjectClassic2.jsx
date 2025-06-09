import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

import bnrimg from '../../images/banner/1.jpg';
import pic1 from '../../images/gallery/portrait/pic1.jpg';
import pic2 from '../../images/gallery/portrait/pic2.jpg';
import pic3 from '../../images/gallery/portrait/pic3.jpg';
import pic4 from '../../images/gallery/portrait/pic4.jpg';
import pic5 from '../../images/gallery/portrait/pic5.jpg';
import pic6 from '../../images/gallery/portrait/pic6.jpg';
import pic7 from '../../images/gallery/portrait/pic7.jpg';
const filters = [
    { label: "Construction", filter: ".cat-1" },
    { label: "Renovation", filter: ".cat-2" },
    { label: "Outdoor", filter: ".cat-3" },
    { label: "Interiors", filter: ".cat-4" },
    { label: "Consulting", filter: ".cat-5" },
    
];

const projects = [
    {
        thumb: pic1,
        image: pic1,
        title: 'Rooms & Halls',
        description: 'Lorem ipsum dolor sitamet, consectetur adipisicing elito, sed do eiusmod.',
        filter: 'cat-1'
    },
    {
        thumb: pic2,
        image: pic2,
        title: 'To-Do Dashboard',
        description: 'Lorem ipsum dolor sitamet, consectetur adipisicing elito, sed do eiusmod.',
        filter: 'cat-2'
    },
    {
        thumb: pic2,
        image: pic2,
        title: 'WhereTO App',
        description: 'Lorem ipsum dolor sitamet, consectetur adipisicing elito, sed do eiusmod.',
        filter: 'cat-3'
    },
    {
        thumb: pic5,
        image: pic5,
        title: 'Rooms & Halls',
        description: 'Lorem ipsum dolor sitamet, consectetur adipisicing elito, sed do eiusmod.',
        filter: 'cat-4'
    },
    {
        thumb: pic3,
        image: pic3,
        title: 'Events and More',
        description: 'Lorem ipsum dolor sitamet, consectetur adipisicing elito, sed do eiusmod.',
        filter: 'cat-5'
    },
    {
        thumb: pic6,
        image: pic6,
        title: 'Remind~Me More',
        description: 'Lorem ipsum dolor sitamet, consectetur adipisicing elito, sed do eiusmod.',
        filter: 'cat-4'
    },
    {
        thumb: pic4,
        image: pic4,
        title: 'Workout Buddy',
        description: 'Lorem ipsum dolor sitamet, consectetur adipisicing elito, sed do eiusmod.',
        filter: 'cat-3'
    },
    {
        thumb: pic7,
        image: pic7,
        title: 'Speed Detector',
        description: 'Lorem ipsum dolor sitamet, consectetur adipisicing elito, sed do eiusmod.',
        filter: 'cat-2'
    },
    {
        thumb: pic5,
        image: pic5,
        title: 'Generic Apps',
        description: 'Lorem ipsum dolor sitamet, consectetur adipisicing elito, sed do eiusmod.',
        filter: 'cat-1'
    },
    {
        thumb: pic1,
        image: pic1,
        title: 'Generic Apps',
        description: 'Lorem ipsum dolor sitamet, consectetur adipisicing elito, sed do eiusmod.',
        filter: 'cat-2'
    },
    {
        thumb: pic6,
        image: pic6,
        title: 'Speed Detector',
        description: 'Lorem ipsum dolor sitamet, consectetur adipisicing elito, sed do eiusmod.',
        filter: 'cat-3'
    },
]

class ProjectClassic2 extends React.Component {
    
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
                <Banner title="Creating quality urban lifestyles, building stronger communities." pagename="Project Classic View" bgimage={bnrimg}/>
                   
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 bg-gray inner-page-padding">
                        {/* GALLERY CONTENT START */}
                        <div className="container">
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
                                        <div className="project-classic hover-shadow">
                                            <div className="mt-box">
                                                <div className="mt-thum-bx  img-center-icon  mt-img-overlay2">
                                                    <img src={item.thumb} alt="" />
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon">
                                                            <NavLink to={"/project-detail"}>
                                                                <i className="fa fa-external-link mt-icon-box-xs " />
                                                            </NavLink>
                                                            <a className="mfp-link" href={item.image}>
                                                                <i className="fa fa-arrows-alt mt-icon-box-xs" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-info bg-white p-a30">
                                                <h4 className="mt-title  m-b10 m-t0" data-hover={item.title}>{item.title}</h4>
                                                <p className="m-b0">{item.description}</p>
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
                        {/* GALLERY CONTENT END */}
                    </div>
                    {/* SECTION CONTENT END  */}
                </div>

                <Footer />
            </>
        );
    };
};

export default ProjectClassic2;