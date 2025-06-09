import React, { useState, useEffect } from "react";
import paper1 from '../../../Data/papers/paper1.jpg';
import paper2 from '../../../Data/papers/paper2.jpg';
import paper3 from '../../../Data/papers/paper3.jpg';
import paper4 from '../../../Data/papers/paper4.jpg';
import paper5 from '../../../Data/papers/paper5.jpg';
import paper6 from '../../../Data/papers/paper6.jpg';
import paper7 from '../../../Data/papers/paper7.jpg';
import paper8 from '../../../Data/papers/paper8.jpg';

const slidesData = [
  { id: 'paper1', imageUrl: paper1, altText: 'paper 1' },
  { id: 'paper2', imageUrl: paper2, altText: 'paper 2' },
  { id: 'paper3', imageUrl: paper3, altText: 'paper 3' },
  { id: 'paper4', imageUrl: paper4, altText: 'paper 4' },
  { id: 'paper5', imageUrl: paper5, altText: 'paper 5' },
  { id: 'paper6', imageUrl: paper6, altText: 'paper 6' },
  { id: 'paper7', imageUrl: paper7, altText: 'paper 7' },
  { id: 'paper8', imageUrl: paper8, altText: 'paper 8' },
];

const Papers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageWidth = 500; // Assuming all images are 500px wide

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, [currentIndex]);

  const overallParagraph =
    "Бид монгол улсын MNS 1185:1998,MNS EN206:2017 стандартыг хангасан М100-М600 хүртлэх бетон зуурмагийг чанарын өндөр түвшинд үйлдвэрлэдэг бөгөөд барилга хот байгуулалтын яамнаас шаардсан бетон зуурмагтай  дагалдах тусгай зөвшөөрөл ,тохирлын гэрчилгээ гэх мэт бүх бичиг баримтыг бүрдүүлж ажиллаж байгаа билээ.";

  return (
    <div
      style={{
        textAlign: "center",
        margin: "40px 0",
        padding: "20px 0",
        width: "100%",
      }}
    >
      <div className="section-head">
        <div className="mt-separator-outer separator-center">
          <div className="mt-separator">
            <h2 className="text-black text-uppercase sep-line-one ">
              <span className="font-weight-300 text-primary">Баримт</span>{" "}
              бичиг
            </h2>
          </div>
        </div>
      </div>
      {/* Viewport for the slider */}
      <div
        style={{
          width: `${imageWidth}px`,
          height: "500px", // Assuming image height is also 500px
          overflow: "hidden",
          margin: "0 auto 20px auto", // Center the slider viewport
          border: "1px solid #ddd", // Optional: to see the viewport boundaries
        }}
      >
        {/* Wrapper for all images, this will slide */}
        <div
          style={{
            display: "flex",
            width: `${slidesData.length * imageWidth}px`, // Total width of all images
            transform: `translateX(-${currentIndex * imageWidth}px)`,
            transition: "transform 1s ease-in-out", // Speed of the slide animation
          }}
        >
          {slidesData.map((slide) => (
            <img
              key={slide.id} // Using the unique id from slidesData
              src={slide.imageUrl}
              alt={slide.altText}
              style={{
                width: `${imageWidth}px`,
                height: "500px",
                objectFit: "cover",
                flexShrink: 0, // Prevent images from shrinking
              }}
            />
          ))}
        </div>
      </div>

      <p
        style={{
          fontSize: "1.1em",
          lineHeight: "1.6",
          color: "#555",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {overallParagraph}
      </p>
    </div>
  );
};

export default Papers;
