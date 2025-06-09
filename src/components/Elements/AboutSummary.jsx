import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import img1 from '../../images/background/bg-6.png';
import img2 from '../../images/background/line.png'; // Background for text blocks

// Placeholder images - replace with your actual project images and paths

import test_img from '../../../Data/test.jpg'
import test_img_b from '../../../Data/ajil1.jpg'; // Example: if your second image is test_b.jpg

const projectsData = [
  {
    id: 1,
    year: "2022 он",
    description: "2012онд М100-М500 маркын бетон зуурмагийг нийт- 50100м3 үйлдвэрлэсэн. Хамтарч ажилласан  төслүүд Хурд групп –Нарны хороолол, KH аппартмент,Рапид харш, MCS групп- Будда виста цогцолбор.",
    imageUrls: [test_img, test_img_b], // Array for multiple images
    altTexts: ["2022 оны ажлын зураг 1", "2022 оны ажлын зураг 2"] // Corresponding alt texts
  },
  {
    id: 2,
    year: "2021-2022",
    description: "Constructed a luxury residential tower, combining aesthetic appeal with functional living spaces. Our team ensured timely completion and adherence to the highest quality standards.",
    imageUrls: [test_img, test_img_b], // Replace with your actual imported image variable for this project
    altTexts: ["2022 оны ажлын зураг 1", "2022 оны ажлын зураг 2"] // Replace with your actual imported image variable for this project
  },
  {
    id: 3,
    year: "2020-2021",
    description: "Developed a multi-functional sports center for the community, featuring modern amenities and eco-friendly construction practices. A hub for local sports and recreation.",
    imageUrls: [test_img, test_img_b], // Replace with your actual imported image variable for this project
    altTexts: ["2022 оны ажлын зураг 1", "2022 оны ажлын зураг 2"] // Replace with your actual imported image variable for this project
  },
  {
    id: 4,
    year: "2019-2020",
    description: "Successfully delivered a state-of-the-art commercial complex, focusing on sustainable design and advanced engineering solutions. This project set new benchmarks in urban development.",
    imageUrls: [test_img, test_img_b], // Replace with your actual imported image variable for this project
    altTexts: ["2022 оны ажлын зураг 1", "2022 оны ажлын зураг 2"] // Replace with your actual imported image variable for this project
  },
  {
    id: 5,
    year: "2018-2019",
    description: "Successfully delivered a state-of-the-art commercial complex, focusing on sustainable design and advanced engineering solutions. This project set new benchmarks in urban development.",
    imageUrls: [test_img, test_img_b], // Replace with your actual imported image variable for this project
    altTexts: ["2022 оны ажлын зураг 1", "2022 оны ажлын зураг 2"] // Replace with your actual imported image variable for this project
  },
  {
    id: 6,
    year: "2017-2018",
    description: "Successfully delivered a state-of-the-art commercial complex, focusing on sustainable design and advanced engineering solutions. This project set new benchmarks in urban development.",
    imageUrls: [test_img, test_img_b], // Replace with your actual imported image variable for this project
    altTexts: ["2022 оны ажлын зураг 1", "2022 оны ажлын зураг 2"] // Replace with your actual imported image variable for this project
  },
  {
    id: 7,
    year: "2016-2017",
    description: "Successfully delivered a state-of-the-art commercial complex, focusing on sustainable design and advanced engineering solutions. This project set new benchmarks in urban development.",
    imageUrls: [test_img, test_img_b], // Replace with your actual imported image variable for this project
    altTexts: ["2022 оны ажлын зураг 1", "2022 оны ажлын зураг 2"] // Replace with your actual imported image variable for this project
  },
];

// Select a few projects to feature on this summary component
const featuredProjects = projectsData.slice(0, 4); // Displaying the first 2 projects

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
                <Link to="/projects" className="site-button site-button-effect">
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
