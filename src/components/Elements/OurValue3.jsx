import React from 'react';
import { NavLink } from 'react-router-dom';

import img1 from '../../images/background/bg-4.png';
import img2 from '../../images/background/bg-site.png';

class OurValue3 extends React.Component {

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
                <div className="section-full p-t80 p-b50 bg-gray bg-no-repeat bg-bottom-right mobile-page-padding" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="container">
                        <div className="section-content ">
                            <div className="row">
                                <div className="col-md-7 col-sm-6  m-b30">
                                    <div className="brochur bg-dark p-a20">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="text-white p-r15">
                                                    <h4 className="mt-tilte">Танд тусалъя!</h4>
                                                    <p>Мэргэжлийн зөвлөгөө, асуулт, чиглүүлэг зэрэг хэрэгтэй байвал бидэнтэй холбогд. Энэхүү салбарт олон жил ажилласан мэргэжилтэн танд тусална.</p>
                                                    <NavLink to="/project-detail" className="site-button btn-effect">Бидэнтэй холбогд</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default OurValue3;