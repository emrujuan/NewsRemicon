import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import LatestBlogs2 from '../Elements/LatestBlogs2';
import BlogComments from '../Elements/BlogComments';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import pic1 from '../../images/blog/default/thum1.jpg';
import pic2 from '../../images/blog/default/thum2.jpg';
import pic3 from '../../images/blog/default/thum3.jpg';
import pic4 from '../../images/blog/large-blog.jpg';
import pic5 from '../../images/blog/large-blog2.jpg';
import pic6 from '../../images/blog/large-blog3.jpg';

import bnrimg from '../../images/banner/1.jpg';

class PostGallery extends React.Component {
    render() {
        const options = {
            loop:true,
            autoplay:true,
            autoplayTimeout:1000,
            margin:30,
            nav:true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items:1,
            dots: false,
            animateOut:'fadeOut',
        };
        return (
            <>

                <Header />
                <div className="page-content ">
                <Banner title="Making your vision come true, that is what we do." pagename="Post Gallery" bgimage={bnrimg}/>
                   
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 square_shape1 square_shape3 inner-page-padding">
                        <div className="container">
                            {/* BLOG START */}
                            <div className="blog-single-wrap-width">
                            <div className="blog-post date-style-3 blog-detail text-black">
                                <div className="mt-post-media">
                                    {/*Fade slider*/}
                                    
                                    <OwlCarousel className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right m-b30" {...options}>
                                        <div className="item">
                                            <div className="aon-thum-bx">
                                                <img src={pic1} alt="" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="aon-thum-bx">
                                                <img src={pic2} alt="" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="aon-thum-bx">
                                                <img src={pic3} alt="" />
                                            </div>
                                        </div>
                                    </OwlCarousel>
                                    {/*fade slider END*/}
                                </div>
                                <div className="mt-post-meta ">
                                    <ul>
                                        <li className="post-date"><strong>20 </strong> <span>April 2022</span> </li>
                                        <li className="post-author"><NavLink to={"#"}>By <span>Admin</span></NavLink> </li>
                                        <li className="post-category"><NavLink to={"#"}><span>Traditional</span></NavLink> </li>
                                    </ul>
                                </div>
                                <div className="mt-post-title ">
                                    <h3 className="post-title"><NavLink to={"#"} className="font-weight-600">From complete turn key to project manager.</NavLink></h3>
                                </div>
                                <div className="mt-post-text">
                                    <p>Duis vestibulum quis quam vel accumsan. Nunc a vulputate lectus. Vestibulum eleifend nisl sed massage sagittis vestibulum. Vestibulum pretium blandit tellus, sodales volutpat sapien varius vel. Phasellus tristique cursus erat, a placerat tellus laoreet eget. Fusce vitae dui sit amet lacus rutrum convallis. 
          </p>
                                    <h4>"When it comes to your house, don’t mess with the rest, trust the best."</h4>
                                    <p> Proin tincidunt tellus ac porta volutpat. Cras mattis congue lacus id bibendum. Mauris ut sodales libero. Maecenas feugiat sit amet enim in accumsan. Here, then, is what I wanted to tell you of my architecture. I created it with courage and idealism, but also with an awareness of the fact that what is important is life, friends, and attempting to make this unjust world a better place in which to live.</p>
                                    <blockquote className="bg-dark text-white author-quote">
                                        <h4 className="m-b0">We let our quality work and commitment to customer satisfaction be our slogan. quality you deserve and dependability you can count on.<i className="fa fa-quote-right" /> </h4>
                                        <div className="p-t15  text-white">
                                            <strong className="text-primary">Jessica Mcdade</strong>
                                            <span>Contractor</span>
                                        </div>
                                    </blockquote>
                                    <p>Duis vestibulum quis quam vel accumsan. Nunc a vulputate lectus. Vestibulum eleifend nisl sed massa sagittis vestibulum. Vestibulum pretium blandit tellus, sodales volutpat sapien varius vel. Phasellus tristique cursus erat, a placerat tellus laoreet eget. Fusce vitae dui sit amet lacus rutrum convallis. Vivamus sit amet lectus venenatis est rhoncus interdum a vitae velit. </p>
                                    <div className="row">
                                        <div className="col-md-4 col-sm-4">
                                            <div className="mt-box m-b30">
                                                <div className="mt-media">
                                                    <img src={pic4} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="mt-box m-b30">
                                                <div className="mt-media">
                                                    <img src={pic5} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="mt-box m-b30">
                                                <div className="mt-media">
                                                    <img src={pic6} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with the . Proin tincidunt tellus ac porta volutpat.</p>
                                </div>
                                <div className="autor-post-tag-share bdr-t-1 bdr-solid bdr-gray p-t20">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            <div className="widget widget_tag_cloud">
                                                <h4 className="tagcloud">Tags</h4>
                                                <div className="tagcloud">
                                                    <NavLink to={"#"}>First tag</NavLink>&nbsp;
                                                    <NavLink to={"#"}>Second tag</NavLink>&nbsp;
                                                    <NavLink to={"#"}>Three tag</NavLink>&nbsp;
                                                    <NavLink to={"#"}>Four tag</NavLink>&nbsp;
                                                    <NavLink to={"#"}>Five tag</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="mt-box">
                                                <div className="clearfix">
                                                    <h4>Share this Post:</h4>
                                                    <div className="widget_social_inks">
                                                        <ul className="social-icons social-md social-square social-dark m-b0">
                                                            <li><NavLink to={"#"} className="fa fa-facebook" /></li>
                                                            <li><NavLink to={"#"} className="fa fa-twitter" /></li>
                                                            <li><NavLink to={"#"} className="fa fa-rss" /></li>
                                                            <li><NavLink to={"#"} className="fa fa-youtube" /></li>
                                                            <li><NavLink to={"#"} className="fa fa-instagram" /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <LatestBlogs2 bgcolor="bg-gray"/>
                            <BlogComments/>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>


                <Footer />

            </>
        );
    };
};

export default PostGallery;