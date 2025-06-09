import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Elements/Switcher';
import bgimage from '../../images/background/bg-site.png';
import logo from '../../../Data/logo-dark.jpg';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.currentstate = {logo: bgimage};
    }
    
    updateFooterLogo = (updatedlogo) => {this.currentstate.logo = updatedlogo;}

    render() {
        
        return (
            <>
                <footer className="site-footer footer-large  footer-dark	footer-wide">
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper pt-1 pb-1">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        
                                        <p className="max-w400">We are a team of professionals who are dedicated to providing the best possible service to our clients.</p>
                                        <ul className="social-icons  mt-social-links">
                                            <li><NavLink to={"#"} className="fa fa-facebook" /></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* RESENT POST */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_address_outer">
                                        <h4 className="widget-title">Холбоо барих</h4>
                                        <ul className="widget_address">
                                            <li>Уlaanbaatar, Mongolia</li>
                                            <li>newsremicon@gmail.com</li>
                                            <li>(+976) 9105-5595</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* USEFUL LINKS */}
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h4 className="widget-title">Useful links</h4>
                                        <ul>
                                            <li><NavLink to={"/about"}>About</NavLink></li>
                                            <li><NavLink to={"/project-grid"}>Projects</NavLink></li>
                                            <li><NavLink to={"/blog-grid"}>Blog</NavLink></li>
                                            <li><NavLink to={"/contactus"}>Contact Us</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* TAGS */}
                                {/*<div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget recent-posts-entry-date">
                                        <h4 className="widget-title">Resent Post</h4>
                                        <div className="widget-post-bx">
                                            <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                                                <div className="mt-post-date text-center text-uppercase text-white p-tb5">
                                                    <strong className="p-date">24</strong>
                                                    <span className="p-month">Mar</span>
                                                    <span className="p-year">2022</span>
                                                </div>
                                                <div className="mt-post-info">
                                                    <div className="mt-post-header">
                                                        <h6 className="post-title"><NavLink to={"/post-sidebar"}>On these beams, we’re building dreams.</NavLink></h6>
                                                    </div>
                                                    <div className="mt-post-meta">
                                                        <ul>
                                                            <li className="post-author"><i className="fa fa-user" />By Admin</li>
                                                            <li className="post-comment"><i className="fa fa-comments" /> 28</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                                                <div className="mt-post-date text-center text-uppercase text-white p-tb5">
                                                    <strong className="p-date">30</strong>
                                                    <span className="p-month">Jan</span>
                                                    <span className="p-year">2022</span>
                                                </div>
                                                <div className="mt-post-info">
                                                    <div className="mt-post-header">
                                                        <h6 className="post-title"><NavLink to={"/post-sidebar"}>We’ll be a sensation for you next renovation</NavLink></h6>
                                                    </div>
                                                    <div className="mt-post-meta">
                                                        <ul>
                                                            <li className="post-author"><i className="fa fa-user" />By Admin</li>
                                                            <li className="post-comment"><i className="fa fa-comments" /> 29</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* NEWSLETTER */}
                                {/* logo images */}
                                <div className='col-lg-3 col-md-6 col-sm-6'>
                                    <img src={logo} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                <div className="mt-footer-bot-center">
                                    <span className="copyrights-text">2025 News Remicon. All rights reserved.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <Switcher updateFooterLogo={this.updateFooterLogo.bind(this)}/>

            </>
        );
    };
};

export default Footer;