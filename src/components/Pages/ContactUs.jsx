import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import GoogleMapReact from 'google-map-react';

import bnrimg from '../../images/banner/4.jpg';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ContactUs extends React.Component {
    render() {
        const defaultProps = {
            center: {
                lat: 34.073280,
                lng: -118.251410
            },
            zoom: 12
        };
        return (
            <>
                <Header />
                <div className="page-content">
                    <Banner title="Бид эх орныхоо дөрвөн зүгт хөгжлийг бүтээлцэнэ" pagename="Contact Us" bgimage={bnrimg} />

                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-md-8 col-sm-6">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5655.387269435258!2d106.7569661827266!3d47.82005905157946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96eb0cdb00ed47%3A0x41eb651c2ee21791!2sNEWS%20Remicon%20LLC!5e1!3m2!1sen!2smn!4v1750025402593!5m2!1sen!2smn" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="contact-info m-b30">
                                            {/* TITLE START */}
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Contact</span> Info</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            <div className="bg-dark p-a20 text-white">
                                                <div className="mt-icon-box-wraper left p-b40" style={{minHeight:"auto"}}>
                                                    <div className="icon-xs"><i className="fa fa-phone" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Phone number</h5>
                                                        <p>(+976) 9105-5595</p>
                                                    </div>
                                                </div>
                                                <div className="mt-icon-box-wraper left p-b40" style={{minHeight:"auto"}}>
                                                    <div className="icon-xs"><i className="fa fa-envelope" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Email address</h5>
                                                        <p>newsremicon@gmail.com</p>
                                                    </div>
                                                </div>
                                                <div className="mt-icon-box-wraper left" style={{minHeight:"auto"}}>
                                                    <div className="icon-xs"><i className="fa fa-map-marker" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Address info</h5>
                                                        <p>Хан-Уул дүүрэг, 21-р хороо, Өлзийтийн зам, 951-1 тоот</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default ContactUs;