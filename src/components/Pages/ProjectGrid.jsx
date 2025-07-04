import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

import bnrimg from '../../images/banner/2.jpg';

import project1 from '../../images/projects/project1.jpg';
import project2 from '../../images/projects/project2.jpg';
import project3 from '../../images/projects/project3.jpg';
import project4 from '../../images/projects/project4.jpg';
import project5 from '../../images/projects/project5.jpg';
import project6 from '../../images/projects/project6.jpg';
import project7 from '../../images/projects/project7.jpg';
import project8 from '../../images/projects/project8.jpg';
import project9 from '../../images/projects/project9.jpg';
import project10 from '../../images/projects/project10.jpg';
import project11 from '../../images/projects/project11.jpg';
import project12 from '../../images/projects/project12.jpg';
import project13 from '../../images/projects/project13.jpg';
import project14 from '../../images/projects/project14.jpg';
import project15 from '../../images/projects/project15.jpg';
import project16 from '../../images/projects/project16.jpg';
import project17 from '../../images/projects/project17.jpg';
import project18 from '../../images/projects/project18.jpg';
import project19 from '../../images/projects/project19.jpg';
import project20 from '../../images/projects/project20.jpg';
import project21 from '../../images/projects/project21.jpg';
import project22 from '../../images/projects/project22.jpg';

const projects = [
    { image: project1, title: 'Хурд Групп ХХК Рапид хороолол' },
    { image: project2, title: 'Хурд Групп ХХК Нарны хороолол' },
    { image: project3, title: 'Хурд Групп ХХК Хүннү хороолол' },
    { image: project4, title: 'Хурд Групп ХХК KH хотхон' },
    { image: project5, title: 'Хурд Групп ХХК Энхтайван хотхон' },
    { image: project6, title: 'Хурд Групп ХХК Академи хотхон' },
    { image: project7, title: 'Хурд Групп ХХК Хаан банк тауэр, Наадам центр' },
    { image: project8, title: 'Могул Ибиз ХХК Хан Хиллс хороолол' },
    { image: project9, title: 'MCS  ХХК Будда виста' },
    { image: project10, title: 'Сүмбэр Цамхаг ХХК Их Засаг Их сургууль' },
    { image: project11, title: 'Эн Би Би Ди ХХК Баялаг Ундраа худалдааны төв' },
    { image: project12, title: 'ТОСК Буянт ухаа1 хороолол' },
    { image: project13, title: 'Вайт Финикс ХХК Есөн Эрдэнэ хороолол' },
    { image: project14, title: 'Нарантуул ХХК SS Garden  хотхон' },
    { image: project15, title: 'Пума ХХК Tuul view хотхон' },
    { image: project16, title: 'Цоба Интернэшнл ХХК Хадат Вилла 1,2 төсөл' },
    { image: project17, title: 'Эйжн Ложистик ХХК Жаргалант Гарден хаус хороолол' },
    { image: project18, title: 'Тайж Групп ХХК Тайж Ресорт зочид буудал' },
    { image: project19, title: 'ТОСК Гранд Буба ХХК Солонго хороолол' },
    { image: project20, title: 'Хурд Пропертийз ХХК Нисэх Гарден хороолол' },
    { image: project21, title: 'Си Өү Эл Си ХХК Дорноговь нүүрс коксжуулах үйлдвэр' }, // switched
    { image: project22, title: 'Жигүүр Гранд ХХК Булган аймаг Баатарван амралтын өргөтгөл' } // switched
];


const ProjectGrid = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-grow">
        <Banner title="Бидний гүйцэтгэсэн ажлууд" pagename="Projects" bgimage={bnrimg} />
        <div className="section-full pt-20 pb-20 inner-page-padding">
          <div className="container">
            <div className="portfolio-wrap row clearfix">
              {projects.map((item, index) => (
                <div key={index} className="col-md-4 col-sm-6 m-b30">
                  <div className="image-effect-two hover-shadow">
                    <img
                      src={item.image}
                      alt={`Project ${index + 1}`}
                      className="w-full"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="figcaption">
                      <h4 className="mt-tilte">{item.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer /> {/* Should now stick to the bottom */}
    </div>
  );
};

export default ProjectGrid;
