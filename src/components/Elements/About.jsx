import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import pic1 from '../../../Data/uildver 2017.jpg'
import pic2 from '../../../Data/uildver4 2017.jpg'
import pic3 from '../../../Data/зөөврийн үйлдвэр.jpg'
import bnr1 from '../../../Data/bgr.jpeg';
const images = [
    pic1,
    pic2,
    pic3
]


class About extends React.Component {
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
        const options = {
            loop: true,
            autoplay: true,
            margin: 30,
            smartSpeed: 1000, 
            nav: false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 1
                }
            }
        };
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b30 bg-dark bg-repeat square_shape2 bg-moving" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator standout-section">
                                    <h2 className="text-white text-uppercase sep-line-one">
                                        <span className="font-weight-300 text-primary">Бидний</span> компани
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-9 col-sm-12">
                                    <OwlCarousel className="owl-carousel about-home owl-btn-vertical-center" {...options}>
                                        {images.map((item, index) => (
                                            <div className="item" key={index}>
                                                <div className="mt-img-effect zoom-slow">
                                                    <NavLink to="/about"><img src={item} alt="" /></NavLink>
                                                </div>
                                            </div>

                                        ))}

                                    </OwlCarousel>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="about-home-right bg-white p-a30">
                                        <h3 className="m-t0"><span className="font-weight-100"></span>Бетон зуурмагийн үйлдвэр</h3>
                                        <p><strong>
                                            “Ньюс ремикон”ХХК нь барилга угсралтын үндсэн материал болох бетон зуурмагийн үйлдвэрлэлийн чиглэлээр үйл ажиллагаа эрхлэн явуулдаг Монголын 100% хөрөнгө оруулалттай компани юм. Анх 2011 онд байгуулагдаж  одоог хүртэл бетон зуурмагийн салбартаа чанарыг ханган харилцагчаа хүндлэн тасралтгүй үйл ажиллагаа явуулж байна...
                                        </strong></p>
                                        <div className="text-right">
                                            <NavLink to="/about" className="site-button-link" data-hover="Read More">Дэлгэрэнгүй <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase hilite-dark">
                        <strong>NEWS REMICON</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default About;