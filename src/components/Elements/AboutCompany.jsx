import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../../../Data/bugd.jpg';

class AboutCompany extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 bg-white p-b50">
                    <div className="container">
                        <div className="section-content ">
                            <div className="m-service-containt text-black">
                                <div className="row">
                                    <div className="col-md-5 col-sm-12">
                                        <div className="service-about-left">
                                            <div className="mt-media">
                                                <img src={img1} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7 col-sm-12">
                                        <div className="service-about-right m-b30">
                                            <h3 className="m-t0">Бид эх орнхоо дөрвөн зүгт хөгжлийг бүтээлцэнэ</h3>
                                            <p>Бид өөрсдийн 20 миксер машинаар захиалгат бүтээгдэхүүнийг тээвэрлэн нийлүүлдэг. 
                                            Мөн шаардлагатай тохиолдолд гэрээт харилцагчдын миксер машинуудыг тээврийн үйлчилгээнд ашигладаг.
                                            Бид тээврийн асуудлыг бүрэн шийдэж чадсанаар хэрэглэгчиддээ тээвэрлэлтээс шалтгаалсан түр зогсолт, 
                                            саатал гаргахгүй байх нөхцөлийг бүрдүүлэн өгдөг. Бетон зуурмагийг технологийн дагуу 
                                            үйлдвэрлэж, зориулалтын машин /миксер/-аар тээвэрлэн хэрэглэгчдэд хүргэхээс гадна
                                            БНСУ-д үйлдвэрлэсэн /44м өндөрт шахдаг 2ш, 55м өндөрт шахдаг 1ш/ явуулын зуурмаг шахах Бетон
                                            насост машинаар цутгах боломжтой. Мөн суурин насосоор барилгын аль ч өндөрт бетон зуурмагийг саадгүй зутгана</p>
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

export default AboutCompany;