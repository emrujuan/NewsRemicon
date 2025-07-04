import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import img1 from "../../images/background/line.png";
import factory1 from "../../../Data/tools/Factory/factory1.jpg";
import factory2 from "../../../Data/tools/Factory/factory2.jpg";
import factory3 from "../../../Data/tools/Factory/factory3.jpg";
import factory4 from "../../../Data/tools/Factory/factory-machine.jpg";
import lab1 from "../../../Data/tools/Laboratory/lab1.jpg";
import lab2 from "../../../Data/tools/Laboratory/lab2.jpg";

const Factory = [
  {
    img: factory1,
    title: "Үйлдвэр №1",
    description:
      "БНСУ-д үйлдвэрлэсэн Samsung маркын 1 цагт 180м3 бетон зуурмагийг үйлдвэрлэх хүчин чадалтай, 2м3 зуурах зууруул, 4 тасалгаатай элс хайрга хийх пункертэй, 200тн цемент агуулах 2 силостой.2012 оны шинэ загварын бүрэн автомат удирдлагатай.",
  },
  {
    img: factory2,
    title: "Үйлдвэр №2",
    description:
      "БНСУ-д үйлдвэрлэсэн Samsung маркын 1 цагт 120м3 бетон зуурмагийг үйлдвэрлэх хүчин чадалтай бүрэн автомат, 2м3 зуурах зууруул, 2 тасалгаатай элс хайрга хийх пункертэй, 100тн цемент агуулах 2 силостой.",
  },
  {
    img: factory3,
    title: "Үйлдвэр №3",
    description:
      "БНСУ-д оруулж ирсэн цагт 90м3 бетон үйлдвэрлэх хүчин чадалтай хагас автомат 0,7м3 бетон зуурах зууруул, 3 тасалгаа элс хайрганы пункер 25тн цемент агуулах силостой.",
  },
];

const TestDetail = [
  {
    title: "Элс шинжилгээ",
    list: [
      "Дээж авах",
      "Ширхэгийн бүрэлдэхүүн,тодорхойлох",
      "Тоос, шаварлаг хольцын хэмжээг тодорхойлох",
      "Нягтыг тодорхойлох",
      "Асгаасан нягт тодорхойлох",
      "Чийглэг тодорхойлох",
      "Ширхэг хоорондын зайг тодорхойлох",
    ],
  },
  {
    title: "Хайрга, дайрганы шинжилгээ",
    list: [
      "Дээж авах",
      "Ширхэгийн бүрэлдэхүүн тодорхойлох",
      "Буталсан хайрга,дайрганы бутлагдсан хэсгийн хэмжээг тодорхойлох",
      "Тоос шаварлаг хольцын хэмжээг тодорхойлох",
      "Нимгэн үзүүрлэг хэмжээтэй ширхэгийн хэмжээг тодорхойлох",
      "Асгаасан нягт тодорхойлох",
      "Ширхэг хоорондын зайг тодорхойлох",
      "Чийглэг тодорхойлох",
    ],
  },
  {
    title: "Цементний шинжилгээ",
    list: [
      "Цементний нунтаглал тодорхойлох",
      "Цементний хэвийн өтгөрөлт тодорхойлох",
      "Цементийн барьцалдах хугацааг тодорхойлох",
      "Цементний шахалт гулзайлтын хязгаарыг тодорхойлох",
    ],
  },
  {
    title: "Нэмэлтний шинжилгээ",
    list: ["Шингэн нэмэлтээс дээж авах", "Шингэн нэмэлтийн нягт тодорхойлох"],
  },
  {
    title: "Бетон зуурмаг турших арга",
    list: [
      "Шинээр бэлтгэсэн бетон зуурмагаас дээж авах",
      "Бетон зуурмагийн темпратур тодорхойлох",
      "Бетон зуурмагийн хөдөлгөөнт чанар тодорхойлох",
      "Бетон зуурмагийн дундаж нягт,гарц тодорхойлох",
      "Бетон зуурмагийн агаар агуулалт тодорхойлох",
    ],
    conclution:
      "Бетон сорьцоор бат бэх тодорхойлох гэсэн шинжилгээнүүдийг өөрийн лабораторидоо хийдэг. Мөн барилгад бетон дагалдах бичиг баримтыг өгдөг.",
  },
];
import machine1 from "../../../Data/tools/machine/machine1.jpg";
import machine2 from "../../../Data/tools/machine/machine2.jpg";
import machine3 from "../../../Data/tools/machine/machine3.jpg";
import machine4 from "../../../Data/tools/machine/machine4.jpg";
import machine5 from "../../../Data/tools/machine/machine5.jpg";
import machine6 from "../../../Data/tools/machine/machine6.jpg";

const machines = [
  {
    title:
      "Машин техникийн хувьд нийт өөрийн гэсэн 20 миксер машинтай. Үүнд:  БНХАУ-д үйлдвэрлэсэн foton маркын 7м3-ын-5ш,БНСУ-д үйлдвэрлэсэн Deawoo  маркын 6м3-ын 12ш,hyuandai маркын 7м3-ын 3ш гэсэн миксер машинуудтай. Шаардлагатай үед түрээслэх гэрээний 10-15миксер машинуудтай",
    img: [machine1],
  },
  {
    title:
      "БНСУ-д үйлдвэрлэсэн 55м,44м,28м-ийн тус тус 3ш насост машинтай.Шаардлагатай үед гэрээт компаниас  түрээслэж болно.",
    img: machine3,
  },
  {
    title:
      "Элс хайрга тээвэрлэх БНСУ-д үйлдвэрлэсэн хово маркын 20м3-ын багтаамжтай  5ш ачааны машинтай.Шаардлага гарсан үед гэрээт компаниас нэмж түрээслэх боломжтой.",
    img: machine4,
  },
  {
    title:
      "БНХАУ-д  үйлдвэрлэсэн  XGM үйлдвэрийн 3м3-ын багтаамжтай 2ш ковш машинтай. ",
    img: [machine5],
  },
];

const ingredients = [
  {
    title: "Цемент",
    description:
      "Бид цементийг Монгол улсын MNS974:2008 стандартад нийцсэн Мон полимент,Мак цемент,Хөтөл цементийг хэрэглэдэг.",
  },
  {
    title: "Элс 0.5",
    description:
      "Зуны цагт MNS2803:2004,MNS392:2014 стандартад нийцүүлж угаасан 0,5, хавар намрын цагт стандартад нийцүүлж аль болох цэвэрхэн шаваргүй 0,5 ашиглаж байна.Улаанбаатартай ойрхон Элит 3 багана,Хан дээж,ЭБСО,Тэргүүн тээвэр,Итгэл түшиг,Бөхөг түргэн гэсэн тусгай зөвшөөрөлтэй карьеруудаас 0,5 татдаг.",
  },
  {
    title: "Хайрга 10*20",
    description:
      "Уулын дайргыг түлхүү бетондоо хэрэглэдэг. Энэ нь монгол улсын MNS2803:2004,MNS390,1998,MNS346:2000 стандартыг хангасан байдаг.Бид Цээ цээ импекс,Мандах булаг,Тэгш плант гэсэн карьеруудаас 10-20 дайрга хэрэглэдэг.",
  },
  {
    title: "Нэмэлт",
    description:
      "Бетон зуурмагийн нэмэлт бодис нь маш чухал бөгөөд EZCON,бэст эргэл,өнөд дэвжих,сезон,chemi star гэсэн солонгос болон хятад нэмэлтүүдийг авч хэрэглэдэг.Энэ нь MNS ASTM C494/C 494M:2010 стандартыг хангасан байдаг.",
  },
  {
    title: "Ус",
    description:
      "Бид өөрсдийн гүний худгаас авч бетонд хэрэглэдэг.Энэ нь MNS3821:85,MNS ISO12439:2012 стандартыг хангасан ундны цэвэр ус юм.",
  },
];
const Tools = () => {
  return (
    <>
      <Header />
      <div
        className="section-full py-5 bg-white"
        style={{ backgroundImage: `url(${img1})`, backgroundRepeat: "repeat" }}
      >
        <div className="container ">
          {/* TITLE START */}
          <div className="section-head text-center">
            <div className="mt-separator-outer separator-center">
              <div className="mt-separator">
                <h2 className="text-uppercase sep-line-one ">
                  <span className="font-weight-300 text-primary">Манай </span>
                  үйлдвэр
                </h2>
              </div>
            </div>
          </div>

          {/* Factory */}
          <div className="py-5 bg-light">
            <div className="container">
              <div className="row">
                {Factory.map((tool, index) => (
                  <div className="col-lg-4 col-md-6 mb-4" key={index}>
                    <div className="border border-dark rounded h-100 text-center">
                      <img
                        src={tool.img}
                        alt={tool.title}
                        className="img-fluid"
                        style={{ objectFit: "cover" }}
                      />
                      <div className="p-3">
                        <h4 className="text-primary">{tool.title}</h4>
                        <p className="">{tool.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Laboratory Section */}
          <div className="py-5 bg-light">
            <div className="container">
              <div className="section-head text-center">
                <div className="mt-separator-outer separator-center">
                  <div className="mt-separator">
                    <h2 className="text-uppercase sep-line-one ">
                      <span className="font-weight-300 text-primary">
                        Манай{" "}
                      </span>
                      Лаборатори
                    </h2>
                  </div>
                </div>
              </div>

              <div className="row col ml-10 mr-5">
                {/* Left: Test List */}
                <div className="d-flex col-lg-6 col-md-6">
                  {TestDetail.map((test, index) => (
                    <div
                      key={index}
                      className="mb-4 box-border border border-dark rounded p-3"
                    >
                      <h4 className="text-primary">{test.title}</h4>
                      <ul className="ps-3">
                        {test.list.map((item, idx) => (
                          <li key={idx} className="mb-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                      {test.conclution && (
                        <p className="mt-2 fw-bold">{test.conclution}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Right: Images */}
                <div className="col-lg-6 d-flex flex-column align-items-center gap-10 col-md-6 col-sm-6">
                  <img
                    src={lab1}
                    alt="Laboratory Overview"
                    className="img-fluid rounded col-lg-12"
                    style={{
                      maxWidth: "500px",
                      height: "450px",
                      objectFit: "cover",
                    }}
                  />
                  <img
                    src={lab2}
                    alt="Laboratory Overview"
                    className="img-fluid rounded col-lg-12"
                    style={{
                      maxWidth: "500px",
                      height: "450px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-10 bg-light">
            <div className="container">
              <div className="section-head text-center">
                <div className="mt-separator-outer separator-center">
                  <div className="mt-separator">
                    <h2 className="text-uppercase sep-line-one ">
                      <span className="font-weight-300 text-primary">
                        Машин{" "}
                      </span>
                      техник
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row ml-3 mr-3">
                {machines.map((machine, index) => (
                  <div className="col-lg-4 col-md-6 mb-4" key={index}>
                    <div className="d-flex flex-column h-[400px] border border-dark rounded text-center" style={{ height: "400px" }}>
                      <img
                        src={machine.img}
                        alt="machine-img"
                        className="img-fluid"
                        style={{ height: "200px", width: "100%", objectFit: "cover" }}
                      />
                      <div className="p-3 mt-auto">
                        <p className="text-black">{machine.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* ingredients */}
          <div className='container'>
            <div className="section-head text-center">
              <div className="mt-separator-outer separator-center">
                <div className="mt-separator">
                  <h2 className="text-uppercase sep-line-one ">
                    <span className="font-weight-300 text-primary">
                      Хольц{" "}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="mt-tabs vertical bg-tabs" style={{ maxWidth: "100%", overflowX: "auto" }}>
              <ul className="nav nav-tabs">
                <li className="active">
                  <a data-toggle="tab" href="#cement">Цемент</a>
                </li>
                <li>
                  <a data-toggle="tab" href="#sand">Элс 0.5</a>
                </li>
                <li>
                  <a data-toggle="tab" href="#gravel">Хайрга 10*20</a>
                </li>
                <li>
                  <a data-toggle="tab" href="#additive">Нэмэлт</a>
                </li>
                <li>
                  <a data-toggle="tab" href="#water">Ус</a>
                </li>
              </ul>
              <div className="tab-content">
                <div id="cement" className="tab-pane active">
                  <p className="m-b0">
                    Бид цементийг Монгол улсын MNS974:2008 стандартад нийцсэн Мон полимент, Мак цемент, Хөтөл цементийг хэрэглэдэг.
                  </p>
                </div>
                <div id="sand" className="tab-pane">
                  <p className="m-b0">
                    Зуны цагт MNS2803:2004, MNS392:2014 стандартад нийцүүлж угаасан 0,5, хавар намрын цагт стандартад нийцүүлж аль болох цэвэрхэн шаваргүй 0,5 ашиглаж байна.Улаанбаатартай ойрхон Элит 3 багана, Хан дээж, ЭБСО, Тэргүүн тээвэр, Итгэл түшиг, Бөхөг түргэн гэсэн тусгай зөвшөөрөлтэй карьеруудаас 0,5 татдаг.
                  </p>
                </div>
                <div id="gravel" className="tab-pane">
                  <p className="m-b0">
                    Уулын дайргыг түлхүү бетондоо хэрэглэдэг. Энэ нь монгол улсын MNS2803:2004, MNS390,1998, MNS346:2000 стандартыг хангасан байдаг.Бид Цээ цээ импекс, Мандах булаг, Тэгш плант гэсэн карьеруудаас 10-20 дайрга хэрэглэдэг.
                  </p>
                </div>
                <div id="additive" className="tab-pane">
                  <p className="m-b0">
                    Бетон зуурмагийн нэмэлт бодис нь маш чухал бөгөөд EZCON, бэст эргэл, өнөд дэвжих, сезон, chemi star гэсэн солонгос болон хятад нэмэлтүүдийг авч хэрэглэдэг. Энэ нь MNS ASTM C494/C 494M:2010 стандартыг хангасан байдаг.
                  </p>
                </div>
                <div id="water" className="tab-pane">
                  <p className="m-b0">
                    Бид өөрсдийн гүний худгаас авч бетонд хэрэглэдэг. Энэ нь MNS3821:85, MNS ISO12439:2012 стандартыг хангасан ундны цэвэр ус юм.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tools;
