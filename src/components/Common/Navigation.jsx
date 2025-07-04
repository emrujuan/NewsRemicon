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
              <NavLink to={"/"} className="nav-link">Нүүр</NavLink>
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
              <NavLink to={"/project-grid"} className="nav-link">Хийсэн ажлууд</NavLink>
            </li>
            <li>
              <NavLink to={"/contactus"} className="nav-link">Бидэнтэй Холбогдох</NavLink>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navigation;
