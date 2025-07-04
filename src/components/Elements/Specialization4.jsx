import React from 'react';  
import { NavLink } from 'react-router-dom';
import compass from './../../images/icon/compass.png';
import calculations from './../../images/icon/calculations.png'
import trowel from './../../images/icon/trowel.png'
import worker from './../../images/icon/engineer.png'
const services = [
    {
        count: 1,
        title: `Зуурмаг`,
        icon: trowel,
        description: 'Хэрэглэгчдийн хүсэлтийн дагуу бид зуурмагийн хольц, нягтаршил, даац зэргийг тохируулж үйлдвэрлэнэ.',
    },
    {
        count: 2,
        title: 'Нарийвчлал, чанар',
        icon: calculations,
        description: 'Захиалганд гарсан зуурмаг бүр нарийвчлалтайгаар үйлдвэрлэгдэн, чанарын хяналтаар ордог.',
    },
    {
        count: 3,
        title: 'Хамт олон',
        icon: worker,
        description: 'Энэхүү зах зээлд олон жил өрсөлдөж буй мэргэшсэн хамт олон.',
    },
    {
        count: 4,
        title: 'Логистикс',
        icon: compass,
        description: 'Түүхий эд болон миксерүүд түргэн шуурхай ажилд гарахад үргэлж бэлэн.',
    }
]

import img1 from '../../../Data/bugd.jpg';
import { tr } from 'framer-motion/client';

class Specialization4 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-tb80 bg-white bg-repeat square_shape2 inner-page-padding" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Бидний</span> Мэргэшил</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                                    {services.map((item, index) => (
                                        <div className="col-md-3 col-sm-6" key={index}>
                                            <div className="mt-icon-box-wraper m-b30">
                                                <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                                    <span className="icon-count-number">{item.count}</span>
                                                    <div className="icon-md inline-icon m-b15 text-primary scale-in-center">
                                                        <span className="icon-cell"><img src={item.icon} alt=""/></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h4 className="mt-tilte m-b25">{item.title}</h4>
                                                        <p>{item.description}</p>
                                                        <NavLink to={"/services"} className="site-button-link" data-hover="Read More">Дэлгэрэнгүй <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                                    </div>
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

export default Specialization4;