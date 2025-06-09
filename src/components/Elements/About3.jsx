import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import pic4 from '../../../Data/img-for-about.png';
// import pic5 from '../../../Data/uildver4 2017.jpg';
import pic6 from '../../../Data/logo.jpg';
import pic1 from '../../images/Signature+Black.png';
const images = [
    pic4,
    pic6,
]

import bnr1 from '../../images/background/line.png';

class About3 extends React.Component {
    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
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
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            margin:30,
            nav:false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items:1,
            dots: true
        };
        return (
            <>
                <div className="section-full p-t30 p-b80 bg-white inner-page-padding">
                    <div className="container">
                        <div className="section-content ">
                            <div className="row">
                                <div className="col-lg-5 col-md-5">
                                    <div className="m-about ">
                                        <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
                                            {images.map((item, index) => (
                                                <div className="item" key={index}>
                                                    <div className="ow-img">
                                                    <NavLink to="/about"><img src={item} alt=""/></NavLink>
                                                    </div>
                                                </div>
                                            ))}
                                        
                                        </OwlCarousel>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7">
                                    <div className="m-about-containt text-black p-t80">
                                        <div className="m-about-years bg-moving" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                                            <span className="text-primary large-title">13</span>
                                            <span className="large-title-info">ЖИЛИЙН ТУРШИЛГА</span>
                                        </div>
                                        <h3 className="font-weight-600">Бид эх орныхоо дөрвөн зүгт хөгжлийг бүтээлцэнэ.</h3>
                                        <p>“Ньюс ремикон”ХХК нь барилга угсралтын үндсэн материал болох бетон зуурмагийн үйлдвэрлэлийн чиглэлээр үйл ажиллагаа эрхлэн явуулдаг Монголын 100% хөрөнгө оруулалттай компани юм. Анх 2011 онд байгуулагдаж  одоог хүртэл бетон зуурмагийн салбартаа чанарыг ханган харилцагчаа хүндлэн тасралтгүй үйл ажиллагаа явуулж байна. 
Бид Монгол улсын MNS 1185:1998, MNS EN206:2017  стандартыг хангасан М150-с М600 хүртэлх бетон зуурмагийг чанарын өндөр түвшинд үйлдвэрлэдэг. Харилцагчиддаа бетон зуурмагийн 3, 7, 28 хоногийн бат бэх, бетон болон материалын чанарын гэрчилгээг өгдөг. 
Бетон зуурмагийн үйлдвэр нь БНСУ-н Samsung  маркын цагт 150м3 бетон үйлдвэрлэх хүчин чадалтай үйлдвэр бөгөөд Улаанбаатар хот, Хан-Уул дүүрэг 21-р хороо Архивын Ерөнхий Газараас 1км-н зайд байрлаж байна.
Мөн манай компани нь хөдөө орон нутагт бетон зуурмаг нийлүүлэх явуулын Samsung  маркын явуулын бетон зуурмагийн үйлдвэртэй ба Булган, Чойр, Дорноговь зэрэг аймгуудад бетон нийлүүлж байна. 
Манай компаний үндсэн зорилго бол эрүүл аюулгүй ажлын байранд стандарт дэг журамыг эрхэмлэн харилцагчийн хүсэл шаардлагт нийцсэн чанартай бетон үйлдвэрлэж эх орныхоо хөгжил бүтээн байгуулалтанд хувь нэмэрээ оруулах явдал юм.  
</p>
                                        <div className="author-info p-t20">
                                            <div className="author-signature">
                                                <img src={pic1} alt="Signature" width={150} />
                                            </div>
                                            <div className="author-name">
                                                <h4 className="m-t0">David Houkr</h4>
                                                <p>Architect &amp; Founder</p>
                                            </div>
                                            <NavLink to="/about" className="site-button btn-effect m-b15"><span>Get in touch</span></NavLink>
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

export default About3;