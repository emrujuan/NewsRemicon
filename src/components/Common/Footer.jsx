import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Elements/Switcher';
import bgimage from '../../images/background/bg-site.png';
import logo from '../../../Data/logo-dark.jpg';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.currentstate = { logo: bgimage };
    }

    updateFooterLogo = (updatedlogo) => { this.currentstate.logo = updatedlogo; }

    render() {

        return (
            <>
                <footer className="site-footer footer-large footer-dark footer-wide w-full mt-auto">
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper pt-1 pb-1">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}

                                        <ul className="social-icons  mt-social-links">
                                            <li>
                                                <a href="https://www.facebook.com/NEWS.REMICON.LLC" target="_blank" rel="noopener noreferrer" className="fa fa-facebook" />
                                            </li>
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
                                        <h4 className="widget-title">Хэрэгтэй холбоосууд</h4>
                                        <ul>
                                            <li><NavLink to={"/about"}>Бидний тухай</NavLink></li>
                                            <li><NavLink to={"/project-grid"}>Хийсэн ажлууд</NavLink></li>
                                            <li><NavLink to={"/contactus"}>Бидэнтэй холбогдох</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
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
                <Switcher updateFooterLogo={this.updateFooterLogo.bind(this)} />

            </>
        );
    };
};

export default Footer;