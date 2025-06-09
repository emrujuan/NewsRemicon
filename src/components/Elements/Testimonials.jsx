import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import pic1 from './../../images/testimonials/pic1.jpg';
import pic2 from './../../images/testimonials/pic2.jpg';
import pic3 from './../../images/testimonials/pic3.jpg';
import pic4 from './../../images/testimonials/pic4.jpg';
import pic5 from './../../images/testimonials/pic5.jpg';
const testimonials = [
    {
        image: pic1,
        reviewername: 'Shelly Johnson',
        position: 'Business Person',
        review: 'Excellent Customer support!. The template itself is very ext ended. simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry\'s'
    },
    {
        image: pic2,
        reviewername: 'Cuthbert Brain',
        position: 'Contractor',
        review: 'The template itself is very ext ended. excellent customer support! simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry\'s'
    },
    {
        image: pic3,
        reviewername: 'Cathrine Wagner',
        position: 'Builder',
        review: 'The template itself is very ext ended. excellent customer support! simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry\'s'
    },
    {
        image: pic4,
        reviewername: 'John Doe',
        position: 'Business Person',
        review: 'Excellent Customer support!. The template itself is very ext ended. simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry\'s'
    },
    {
        image: pic5,
        reviewername: 'Cuthbert Brain',
        position: 'Business Person',
        review: 'The template itself is very ext ended. excellent customer support!.  simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry\'s'
    }
]

import bnr1 from '../../images/background/bg6.jpg';

class Testimonials extends React.Component {
    render() {

        const options = {
            loop:true,
            autoplay:true,
            margin:30,
            nav:false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                991:{
                    items:2
                }
            }
        };

        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b50 square_shape2 bg-cover" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                    <div className="container">
                        <div className="section-content">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="mt-separator-outer separator-center">
                                    <div className="mt-separator">
                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Client</span> Testimonials</h2>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            {/* TESTIMONIAL START */}
                            <OwlCarousel className="owl-carousel testimonial-home" {...options}>
                            
                                {testimonials.map((item, index) => (
                                    <div key={index} className="item">
                                        <div className="testimonial-2 m-a30 hover-animation-1">
                                            <div className=" block-shadow bg-white p-a30">
                                                <div className="testimonial-detail clearfix">
                                                    <div className="testimonial-pic radius shadow scale-in-center"><img src={item.image} width={100} height={100} alt=""/></div>
                                                    <h4 className="testimonial-name m-b5">{item.reviewername} -</h4>
                                                    <span className="testimonial-position">{item.position}</span>
                                                </div>
                                                <div className="testimonial-text">
                                                    <span className="fa fa-quote-right" />
                                                    <p> {item.review}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>    
                               
                            
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
                        <strong>Clients</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default Testimonials;