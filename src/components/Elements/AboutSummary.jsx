import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import img1 from '../../images/background/bg-6.png';
import img2 from '../../images/background/line.png'; 

import project_2018_1 from '../../../Data/Projects/2018-1.jpg'
import project_2018_2 from '../../../Data/Projects/2018-2.jpg'
import project_2018_3 from '../../../Data/Projects/2018-3.jpg'
import project_2018_4 from '../../../Data/Projects/2018-4.jpg'
import project_2018_5 from '../../../Data/Projects/2018-5.jpg'
import project_2018_6 from '../../../Data/Projects/2018-6.jpg'
import project_2017_1 from '../../../Data/Projects/2017-1.jpg'
import project_2017_2 from '../../../Data/Projects/2017-2.jpg'
import project_2016_1 from '../../../Data/Projects/2016-1.jpg';
import project_2016_2 from '../../../Data/Projects/2016-2.jpg';
import project_2015_1 from '../../../Data/Projects/2015-1.jpg';
import project_2015_2 from '../../../Data/Projects/2015-2.jpg';
import project_2014_1 from '../../../Data/Projects/2014-1.jpg';
import project_2014_2 from '../../../Data/Projects/2014-2.jpg';
import project_2013_1 from '../../../Data/Projects/2013-1.jpg';
import project_2013_2 from '../../../Data/Projects/2013-2.jpg';
import project_2012_1 from '../../../Data/Projects/2012-1.jpg';
import project_2012_2 from '../../../Data/Projects/2012-2.jpg';

const projectsData = [
  {
    id: 1,
    year: "2018 он",
    description: "2018 онд Өмнөговь аймагийн Ханбогд сумын Оюу толгойн уурхайн дэд станц барих бетон зуурмагийн ажлыг хийж гүйцэтгэсэн.Нийт-1000м3 бетоныг М150,М200,М350 гэсэн маркаар амжилттай хийж дуусгасан.",
    imageUrls: [project_2018_1, project_2018_2],
    altTexts: ["2018 оны ажлын зураг 1", "2018 оны ажлын зураг 2"]
  },
  {
    id: 2,
    year: "2018 он",
    description: "2018 онд Дорноговь аймагийн Хөвсгөл сумын Айл баян уурхайн нүүрс угаах үйлдвэрийн бүх бетон зуурмагийн ажлыг хийж гүйцэтгэсэн.Тус уурхайн М150,М250,М350,М400,М550 гэсэн маркаар Нийт-5000м3 бетон цутгалтын ажлыг амжилттай хийж гүйцэтгэсэн.",
    imageUrls: [project_2018_3, project_2018_4],
    altTexts: ["2018 оны ажлын зураг 3", "2018 оны ажлын зураг 4"]
  },
  {
    id: 3,
    year: "2018 он",
    description: "2018 онд нийт-30000м3 бетон зуурмагийг үйлдвэрлэж Эн биби ди-SS Garden. Хүннү вилла, Могул ибиз- Хан хиллс хороолол, Само мах-Жаргалант ресорт ,Их майдар,Ангаахын сургуулийн барилга гэх мэт төслүүдтэй хамтарч ажилласан.",
    imageUrls: [project_2018_5, project_2018_6],
    altTexts: ["2018 оны ажлын зураг 5", "2018 оны ажлын зураг 6"]
  },
  {
    id: 4,
    year: "2017 он",
    description: "2017 онд нийт-33400м3 бетон үйлдвэрлэж Хурд групп-Нарны хороолол 5-р ээлж,Аккадеми хотхон,наадам центр.Само мах- Жаргалант ресорт.Бүргэд констракшн-Оффиссын барилга гэх төслүүдтэй хам тарч ажилласан.",
    imageUrls: [project_2017_1, project_2017_2],
    altTexts: ["2017 оны ажлын зураг 1", "2017 оны ажлын зураг 2"]
  },
  {
    id: 5,
    year: "2016 он",
    description: "2016 онд нийт-48000м3 бетон зуурмаг үйлдвэрлэсэн. Хамтарч ажилласан төслүүд бол Хурд-Нарны хороолол 4-р ээлж,Энх тайван хороолол.Эн би би ди-SS Garden",
    imageUrls: [project_2016_1, project_2016_2],
    altTexts: ["2016 оны ажлын зураг 1", "2016 оны ажлын зураг 2"]
  },
  {
    id: 6,
    year: "2015 он",
    description: "2015 онд нийт-47904м3 бетон үйлвэрлэж, Хурд групп-нарны хороолол-3-р ээлж, Хаан таур, Энхтайван хороолол. Камдер-Encanto town. Эн би би ди-Есөн эрдэнэ хотхон, Баялаг ундраа төв гэх томоохон төслүүдтэй хам тарч ажилласан.",
    imageUrls: [project_2015_1, project_2015_2],
    altTexts: ["2015 оны ажлын зураг 1", "2015 оны ажлын зураг 2"]
  },
  {
    id: 7,
    year: "2014 он",
    description: "2014 онд нийт-68286м3 бетон үйлвэрлэж, Хурд групп-нарны хороолол 2-р ээлж, Хүннү хороолол,Могул ибиз-Хан хиллс,9 эрдэнэ хотхон,Камдер-Encanto town,Буянт-Ухаа 2 хороололуудын бетон зуурмагийг цутгасан.",
    imageUrls: [project_2014_1, project_2014_2],
    altTexts: ["2014 оны ажлын зураг 1", "2014 оны ажлын зураг 2"]
  },
  {
    id: 8,
    year: "2013 он",
    description: "2013 онд нийт-51662м3 бетон зуурмаг үйлдвэрлэж Хурд групп-Нарны хороолол,Хүннү хороолол.Буянт Ухаа1 хороолол. Могул ибиз -Хан хиллс хороолол гэх мэт төслүүдийн бетон зуурмагийн ажлыг хийж гүйцэтгэсэн.",
    imageUrls: [project_2013_1, project_2013_2],
    altTexts: ["2013 оны ажлын зураг 1", "2013 оны ажлын зураг 2"]
  },
  {
    id: 9,
    year: "2012 он",
    description: " 2012 онд М100-М500 маркын бетон зуурмагийг нийт- 50100м3 үйлдвэрлэсэн. Хамтарч ажилласан  төслүүд Хурд групп –Нарны хороолол, KH аппартмент,Рапид харш, MCS групп- Будда виста цогцолбор.",
    imageUrls: [project_2012_1, project_2012_2],
    altTexts: ["2012 оны ажлын зураг 1", "2012 оны ажлын зураг 2"]
  }
];


// Select a few projects to feature on this summary component
const featuredProjects = projectsData.slice(0, 9); // Displaying the first 2 projects

class AboutSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstProjectImageIndex: 0,
    };
    this.firstProjectInterval = null;
  }

  componentDidMount() {
    // The masonary.js script might not be necessary for this specific row-based layout.
    // Consider removing if it's not used or if it causes issues with this component's display.
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
        // INFO: The following line might remove the script tag before it has fully executed its purpose,
        // especially if masonary.js initializes asynchronously or on DOMContentLoaded.
        // document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/masonary.js");

    if (featuredProjects.length > 0 && featuredProjects[0].imageUrls && featuredProjects[0].imageUrls.length > 1) {
      this.firstProjectInterval = setInterval(() => {
        this.setState(prevState => ({
          firstProjectImageIndex: (prevState.firstProjectImageIndex + 1) % featuredProjects[0].imageUrls.length,
        }));
      }, 5000);
    }
  }

  componentWillUnmount() {
    if (this.firstProjectInterval) {
      clearInterval(this.firstProjectInterval);
    }
  }

  render() {
    const fadeInAnimation = `
      @keyframes fadeInSmooth {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      .project-image-fade-in {
        animation: fadeInSmooth 0.7s ease-in-out;
      }
    `;

    return (
      <>
        <style>{fadeInAnimation}</style>
        <div
          className="section-full p-t80 p-b50 bg-dark bg-repeat square_shape2 inner-page-padding"
          style={{ backgroundImage: "url(" + img1 + ")" }}
        >
          <div className="container">
            {/* TITLE START */}
            <div className="section-head">
              <div className="mt-separator-outer separator-left">
                <div className="mt-separator text-white">
                  <h2 className="text-uppercase sep-line-one ">
                    <span className="font-weight-300 text-primary">Хийсэн</span>{" "}
                    ажлуудаас
                  </h2>
                </div>
              </div>
            </div>
            {/* TITLE END */}
            <div className="section-content our-story">
              {featuredProjects.map((project, index) => (
                <div className="row" key={project.id} style={{ marginBottom: index === featuredProjects.length - 1 ? '0px' : '30px' }}>
                  <div className="col-md-4 col-sm-6">
                    <div className="our-story-pic-block">
                      <div className="mt-media our-story-pic" style={{ position: 'relative' }}>
                        {
                          index === 0 && project.imageUrls && project.imageUrls.length > 1 ? (
                            <img 
                              className="project-image-fade-in project-image-fixed-size" 
                              key={this.state.firstProjectImageIndex} 
                              src={project.imageUrls[this.state.firstProjectImageIndex]} 
                              alt={project.altTexts[this.state.firstProjectImageIndex]} 
                            />
                          ) : (
                            <img 
                              className="project-image-fixed-size"
                              src={project.imageUrls && project.imageUrls[0]} // Fallback if not slideshow
                              alt={project.altTexts && project.altTexts[0] || project.year} 
                            />
                          )
                        }
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-6">
                    <div
                      className="mt-box our-story-detail bg-moving bg-cover"
                      style={{ backgroundImage: "url(" + img2 + ")" }}
                    >
                      <h4 className="text-uppercase m-b20">{project.year}</h4>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Projects Button */}
            <div className="row">
              <div className="col-md-12 text-center p-t30">
                <Link to="/project-grid" className="site-button site-button-effect">
                  Бүх ажлуудыг харах
                </Link>
                {/* Ensure you have a route set up for "/projects" if using React Router */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutSummary;
