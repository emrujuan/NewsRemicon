import React from "react";
import { NavLink } from "react-router-dom";
import bnrimg from "../../../Data/uria.jpg";
class Banner extends React.Component {
  render() {
    return (
      <>
        <div
          className="mt-bnr-inr overlay-wraper bg-parallax bg-top-center 
                    h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
          data-stellar-background-ratio="0.5"
          style={{
            backgroundImage: `url(${bnrimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
        >
          <div className="overlay-main bg-black opacity-07" />
          <div className="container">
            <div className="mt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="m-b0 text-white">{this.props.title}</h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="mt-breadcrumb breadcrumb-style-2">
                  <li>
                    <NavLink to={"./"}>Home</NavLink>
                  </li>
                  <li>{this.props.pagename}</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Banner;
