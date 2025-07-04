import React from "react";
import { NavLink } from "react-router-dom";
import img3 from "../../../Data/trucks/truck3.png";
import backPic from "../../images/background/bg-6.png";

const services = [
  {
    count: 1,
    title: `B10 М150 `,
    icon: img3,
    description:
      "Уг марктай бетон нь 1см2 талбайд 150кг даах даац бүхий бетон юм. Зориулалт нь: Бэлтгэл ул, дээврийн тэгшилэгээ, боржур хашааны ул бетонд ашиглана.",
  },
  {
    count: 2,
    title: "B-15 М200",
    icon: img3,
    description:
      "Уг марктай бетон нь 1см2 талбайд 200кг даах даац бүхий бетон юм. Зориулалт нь: 1 давхар байшингийн бүрэн цутгалт, гадна талбайд ашиглана.",
  },
  {
    count: 3,
    title: "B-20 М250",
    icon: img3,
    description:
    "Уг марктай бетон нь 1см2 талбайд 200кг даах даац бүхий бетон юм. Зориулалт нь: 9 давхар барилгын бүх хийцүүдэд ашиглана.",
  },
  {
    count: 4,
    title: "B25 М350",
    icon: img3,
    description:
      "Уг марктай бетон нь 1см2 талбайд 300кг даах даац бүхий бетон юм. Зориулалт нь: 9 давхар барилгын бүх хийцүүд, суурь суурийн бетонд ашиглана.",
  },
  {
    count: 5,
    title: "B30 М400",
    icon: img3,
    description:
      "Уг марктай бетон нь 1см2 талбайд 400кг даах даац бүхий бетон юм. Зориулалт нь: Өндөр барилга, суурь бүх хийц эдлэл ашиглана.",
  },
  {
    count: 6,
    title: "Бетон зуурмаг М450-М600",
    icon: img3,
    description:
      "Уг Энэ маркын бетонуудыг өндөр барилга байгууламж гүүр болон үйлдвэрийн дам нуруу багана, төмөр бетон сууринд ашигладаг.",
  },
  {
    count: 7,
    title: "Ус үл нэвтрүүлэх бетон зуурмаг",
    icon: img3,
    description:
      "Энэ төрлийн бетон нь ус нэвтрүүлэхгүй байх зориулалттай тусгай төрлийн бетон бөгөөд чийг усны даралтанд өртдөг барилга байгууламжинд ашиглагддаг. Тухайлбал: Суурь, хонгил усны сав, усан бассейн, далан, дээврийн давцан г.м",
  },
  {
    count: 8,
    title: "Бетон зуурмаг М650-М700",
    icon: img3,
    description: "Энэ маркын бетон нь 1см2 талбайд 700кг даах даац бүхий бетон юм. Зориулалт нь: Өндөр барилга, суурь бүх хийц эдлэл ашиглана.",
  }
];


class OurServices extends React.Component {
  componentDidMount() {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/masonary.js");
  }
  render() {
    return (
      <>
        <div className="section-full mobile-page-padding  p-b50  square_shape2">
          <div className="section-content">
            <div
              className="Service-half-top p-t80  bg-dark bg-moving"
              style={{ backgroundImage: "url(" + backPic + ")" }}
            >
              <div className="container">
                {/* TITLE START */}
                <div className="section-head text-white">
                  <div className="mt-separator-outer separator-left">
                    <div className="mt-separator">
                      <h2 className="text-white text-uppercase sep-line-one ">
                        <span className="font-weight-300 text-primary py-4">
                        Бүтээгдэхүүн 
                        </span>{" "}
                        Үйлчилгээ
                      </h2>
                    </div>
                  </div>
                </div>
                {/* TITLE END */}
              </div>
            </div>
            <div className="services-half-bottom">
              <div className="container">
                <div className="row">
                  {services.map((item, index) => (
                    <div className="col-md-3 col-sm-6" key={index}>
                      <div className="mt-icon-box-wraper m-b30">
                        <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                          <span className="icon-count-number">
                            {item.count}
                          </span>
                          <div className="icon-md inline-icon m-b15 scale-in-center">
                            <span className="icon-cell">
                              <img src={item.icon} alt="" />
                            </span>
                          </div>
                          <div className="icon-content">
                            <h4 className="text-primary font-weight-600 d-inline-block">{item.title}</h4>
                            <p className="text-black">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OurServices;
