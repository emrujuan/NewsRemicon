import React from "react";
import { NavLink } from "react-router-dom";

const ActiveNav = ({ isActive }) => ({
    color: isActive ? '#0f5a9d' : 'black'
});

class Navigation extends React.Component { 
  
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
        <div
          className={
            this.props.bgcolor !== ""
              ? `header-nav navbar-collapse collapse ${this.props.bgcolor}`
              : "header-nav navbar-collapse collapse"
          }
        >
          <ul className="nav navbar-nav">
            <li>
              <NavLink to={""} className="nav-link">Нүүр</NavLink>
              <ul className="sub-menu">
                <li>
                  <NavLink to={"/"} className="nav-link">Home-1</NavLink>
                </li>
                <li>
                  <NavLink to={"/homepage2"} className="nav-link">Home-2</NavLink>
                </li>
                <li>
                  <NavLink to={"/homepage3"} className="nav-link">Home-3 boxed style</NavLink>
                </li>
                <li>
                  <NavLink to={"/homepage4"} className="nav-link">Home-4</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to={"/about"} className="nav-link" style={ActiveNav}>Бидний тухай</NavLink>
            </li>
            <li>
              <NavLink to={"/services"} className="nav-link" style={ActiveNav}>Үйлчилгээ</NavLink>
            </li>
            <li>
              <NavLink to={"/tools"} className="nav-link" style={ActiveNav}>Төхөөрөмж</NavLink>
            </li>
            <li>
              <NavLink to={""} className="nav-link">Pages</NavLink>
              <ul className="sub-menu">
                <li>
                  <NavLink to={""} className="nav-link">Blog</NavLink>    
                  <ul className="sub-menu has-child">
                    <li>
                      <NavLink to={"/blog-grid"} className="nav-link">Blog Grid</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/blog-listing"} className="nav-link">Blog Listing</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/blog-masonary"} className="nav-link">Blog Masonry</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to={"/faq"} className="nav-link">FAQ</NavLink>
                </li>
                <li>
                  <NavLink to={"/error"} className="nav-link">Error 404</NavLink>
                </li>
                <li>
                  <NavLink to={"/contactus"} className="nav-link">Contact us</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to={""} className="nav-link">Post detail</NavLink>
              <ul className="sub-menu">
                <li>
                  <NavLink to={"/post-image"} className="nav-link">Post Image</NavLink>
                </li>
                <li>
                  <NavLink to={"/post-gallery"} className="nav-link">Post Gallery</NavLink>
                </li>
                <li>
                  <NavLink to={"/post-video"} className="nav-link">Post Video</NavLink>
                </li>
                <li>
                  <NavLink to={"/post-sidebar"} className="nav-link">Post Right Sidebar</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to={""} className="nav-link">Хийсэн ажлууд</NavLink>
              <ul className="sub-menu">
                <li>
                  <NavLink to={"/project-grid"} className="nav-link">Project Grid</NavLink>
                </li>
                <li>
                  <NavLink to={"/project-masonary"} className="nav-link">Project Masonry</NavLink>
                </li>
                <li>
                  <NavLink to={"/project-carousel"} className="nav-link">Project Carousel</NavLink>
                </li>
                <li>
                  <NavLink to={"/project-classic1"} className="nav-link">Project Classic-1</NavLink>
                </li>
                <li>
                  <NavLink to={"/project-classic2"} className="nav-link">Project Classic-2</NavLink>
                </li>
                <li>
                  <NavLink to={"/project-detail"} className="nav-link">Project Detail</NavLink>
                </li>
              </ul>
            </li>
            <li className="submenu-direction">
              <NavLink to={""} className="nav-link">Shortcodes</NavLink>
              <ul className="sub-menu">
                <li>
                  <NavLink to={"/accordian"} className="nav-link">Accordian</NavLink>
                </li>
                <li>
                  <NavLink to={"/button"} className="nav-link">Button</NavLink>
                </li>
                <li>
                  <NavLink to={"/iconboxstyle"} className="nav-link">Icon box style</NavLink>
                </li>
                <li>
                  <NavLink to={"/listgroup"} className="nav-link">List group</NavLink>
                </li>
                <li>
                  <NavLink to={"/modalpopup"} className="nav-link">Modal popup</NavLink>
                </li>
                <li>
                  <NavLink to={"/tabs"} className="nav-link">Tabs</NavLink>
                </li>
                <li>
                  <NavLink to={"/table"} className="nav-link">Table</NavLink>
                </li>
                <li>
                  <NavLink to={"/video"} className="nav-link">Video</NavLink>
                </li>
                <li>
                  <NavLink to={"/iconfont"} className="nav-link">Icon Font</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navigation;
