import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../images/main-slider/slider1/slide1.jpg";
import img2 from "../../images/main-slider/slider1/slide2.jpg";
import Bugd from "../../../Data/bugd.jpg";
import Slide2 from "../../../Data/DSC_0044.jpg";

class Slider extends React.Component {
  componentDidMount() {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
          // Add custom initialization to ensure full-screen
          if (window.jQuery && window.jQuery("#welcome").revolution) {
            window.jQuery("#welcome").revolution({
              sliderLayout: "fullwidth",  // Change to fullscreen layout
              fullScreenOffsetContainer: "#header",  // Adjust if you have a header
              responsiveLevels: [1240, 1024, 778, 480],
              gridwidth: [1920, 1240, 1024, 480],
              gridheight: [window.innerHeight, window.innerHeight, window.innerHeight, window.innerHeight],
            });
          }
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/rev-script-1.js");
  }

  render() {
    return (
      <>
        <div
          id="welcome_wrapper"
          className="rev_slider_wrapper fullscreen-container "
          data-alias="goodnews-header"
          data-source="gallery"
          style={{
            background: "#eeeeee",
            padding: '0px 0px',
            width: '100%',
            maxWidth: '100%',
            margin: '0 auto'
          }}
        >
          <div
            id="welcome"
            className="rev_slider fullscreenbanner"
            style={{
              display: "block",
              width: '100%',
              height: '100vh',
              maxWidth: '100%'
            }}
            data-version="5.4.3.1"
          >
            <ul>
              {/* SLIDE 1 */}
              <li
                data-index="rs-901"
                data-transition="fade"
                data-slotamount="default"
                data-hideafterloop={0}
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed="default"
                data-thumb={img1}
                data-rotate={0}
                data-fstransition="fade"
                data-fsmasterspeed={300}
                data-fsslotamount={7}
                data-saveperformance="off"
                data-title
                data-param1
                data-param2
                data-param3
                data-param4
                data-param5
                data-param6
                data-param7
                data-param8
                data-param9
                data-param10
                data-description
              >
                {/* MAIN IMAGE */}
                <img
                  src={Bugd}
                  alt="Slide1"
                  data-lazyload={Bugd}
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgparallax={4}
                  className="rev-slider-slide-bg"
                  style={{
                    objectFit: 'contain',
                    width: '70%',
                    height: '70',
                    minHeight: '500px',
                    maxHeight: '800px'
                  }}
                  data-no-reti
                />
                {/* LAYERS */}
                {/* LAYER NR. 1 [ for overlay ] */}
                <div
                  className="tp-caption tp-shape tp-shapewrapper "
                  id="slide-901-layer-0"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-width="full"
                  data-height="full"
                  data-whitespace="nowrap"
                  data-type="shape"
                  data-basealign="slide"
                  data-responsive_offset="off"
                  data-responsive="off"
                  data-frames='[
                         {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                         {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                         ]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.11)",
                    borderColor: "rgba(0, 0, 0, 0)",
                    borderWidth: 0,
                  }}
                ></div>
                {/* LAYER NR. 4 [ for title ] */}
                <div
                  className="tp-caption tp-resizeme"
                  id="slide-901-layer-2"
                  data-x="['left','left','left','left']"
                  data-hoffset="['50','130','130','130']"
                  data-y="['top','top','top','top']"
                  data-voffset="['240','240','180','200']"
                  data-fontsize="['72','72','62','36']"
                  data-lineheight="['82','82','72','42']"
                  data-width="['700','700','700','320']"
                  data-height="['none','none','none','none']"
                  data-whitespace="['normal','normal','normal','normal']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":"+790","speed":1500,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[5,5,5,5]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 13,
                    whiteSpace: "normal",
                    fontWeight: 700,
                    color: "#111",
                    borderWidth: 0,
                    fontFamily: '"Poppins", sans-serif',
                    textTransform: "uppercase",
                    wordBreak: "break-word"
                  }}
                >
                  <div>Ньюс Ремикон ХХК</div>
                </div>

                {/* LAYER NR. 5 [ for block] */}
                <div
                  className="tp-caption tp-resizeme custom-caption"
                  id="slide-901-layer-4"
                  data-x="['left','left','left','left']"
                  data-hoffset="['50','130','130','130']"
                  data-y="['top','top','top','top']"
                  data-voffset="['410','410','350','340']"
                  data-fontsize="['36','36','28','20']"
                  data-lineheight="['46','46','36','30']"
                  data-width="['700','700','650','320']"
                  data-height="['none','none','none','none']"
                  data-whitespace="['normal','normal','normal','normal']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":"+790","speed":1500,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[10,10,10,10]"
                  data-paddingright="[16,16,16,16]"
                  data-paddingbottom="[10,10,10,10]"
                  data-paddingleft="[16,16,16,16]"
                  data-allowfullscreen="true"
                  style={{
                    zIndex: 13,
                    whiteSpace: "normal",
                    fontWeight: 500,
                    color: "#fff",
                    fontFamily: '"Poppins", sans-serif',
                    background: "rgba(15, 90, 157, 0.85)",
                    padding: "10px 16px",
                    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.3)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  Бид эх орныхоо дөрвөн зүгт хөгжлийг бүтээлцэнэ.
                </div>

                {/* LAYER NR. 6 [ for see all service botton ] */}
                <div
                  className="tp-caption tp-resizeme custom-caption"
                  id="slide-901-layer-5"
                  data-x="['left','left','left','left']"
                  data-hoffset="['50','130','130','130']"
                  data-y="['top','top','top','top']"
                  data-voffset="['500','520','500','480']"
                  data-lineheight="['none','none','none','none']"
                  data-width="['300','300','300','300']"
                  data-height="['none','none','none','none']"
                  data-whitespace="['normal','normal','normal','normal']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[ 
                         {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                         {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                         ]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: 100, textTransform: "uppercase", marginTop: "40px" }}
                >
                  <NavLink
                    to="/about"
                    className="site-button-secondry btn-effect"
                  >
                    бидний тухай
                  </NavLink>
                </div>
              </li>
              {/* SLIDE 2 */}
              <li
                data-index="rs-902"
                data-transition="fade"
                data-slotamount="default"
                data-hideafterloop={0}
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed="default"
                data-thumb={img2}
                data-rotate={0}
                data-fstransition="fade"
                data-fsmasterspeed={300}
                data-fsslotamount={7}
                data-saveperformance="off"
                data-title
                data-param1
                data-param2
                data-param3
                data-param4
                data-param5
                data-param6
                data-param7
                data-param8
                data-param9
                data-param10
                data-description
              >
                {/* MAIN IMAGE */}
                <img
                  src={Slide2}
                  alt=""
                  data-lazyload={Slide2}
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgparallax={4}
                  className="rev-slidebg"
                  data-no-retina
                />
                {/* LAYERS */}
                {/* LAYER NR. 1 [ for overlay ] */}
                <div
                  className="tp-caption tp-shape tp-shapewrapper "
                  id="slide-902-layer-0"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','0','0']"
                  data-width="full"
                  data-height="full"
                  data-whitespace="nowrap"
                  data-type="shape"
                  data-basealign="slide"
                  data-responsive_offset="off"
                  data-responsive="off"
                  data-frames='[
                         {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                         {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                         ]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.11)",
                    borderColor: "rgba(0, 0, 0, 0)",
                    borderWidth: 0,
                  }}
                ></div>
                {/* LAYER NR. 4 [ for title ] */}
                <div
                  className="tp-caption tp-resizeme"
                  id="slide-901-layer-2"
                  data-x="['left','left','left','left']"
                  data-hoffset="['50','130','130','130']"
                  data-y="['top','top','top','top']"
                  data-voffset="['240','240','180','200']"
                  data-fontsize="['72','72','62','36']"
                  data-lineheight="['82','82','72','42']"
                  data-width="['700','700','700','320']"
                  data-height="['none','none','none','none']"
                  data-whitespace="['normal','normal','normal','normal']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":"+790","speed":1500,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[5,5,5,5]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{
                    zIndex: 13,
                    whiteSpace: "normal",
                    fontWeight: 700,
                    color: "#111",
                    borderWidth: 0,
                    fontFamily: '"Poppins", sans-serif',
                    textTransform: "uppercase",
                    wordBreak: "break-word"
                  }}
                >
                  <div>Ньюс Ремикон ХХК</div>
                </div>

                {/* LAYER NR. 5 [ for block] */}
                <div
                  className="tp-caption tp-resizeme custom-caption"
                  id="slide-901-layer-4"
                  data-x="['left','left','left','left']"
                  data-hoffset="['50','130','130','130']"
                  data-y="['top','top','top','top']"
                  data-voffset="['410','410','350','340']"
                  data-fontsize="['36','36','28','20']"
                  data-lineheight="['46','46','36','30']"
                  data-width="['700','700','650','320']"
                  data-height="['none','none','none','none']"
                  data-whitespace="['normal','normal','normal','normal']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":"+790","speed":1500,"sfxcolor":"#fff","sfx_effect":"blockfromleft","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[10,10,10,10]"
                  data-paddingright="[16,16,16,16]"
                  data-paddingbottom="[10,10,10,10]"
                  data-paddingleft="[16,16,16,16]"
                  data-allowfullscreen="true"
                  style={{
                    zIndex: 13,
                    whiteSpace: "normal",
                    fontWeight: 500,
                    color: "#fff",
                    fontFamily: '"Poppins", sans-serif',
                    background: "rgba(15, 90, 157, 0.85)",
                    padding: "10px 16px",
                    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.3)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  Бид эх орныхоо дөрвөн зүгт хөгжлийг бүтээлцэнэ.
                </div>

                {/* LAYER NR. 6 [ for see all service botton ] */}
                <div
                  className="tp-caption tp-resizeme custom-caption"
                  id="slide-901-layer-5"
                  data-x="['left','left','left','left']"
                  data-hoffset="['50','130','130','130']"
                  data-y="['top','top','top','top']"
                  data-voffset="['500','520','500','480']"
                  data-lineheight="['none','none','none','none']"
                  data-width="['300','300','300','300']"
                  data-height="['none','none','none','none']"
                  data-whitespace="['normal','normal','normal','normal']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[ 
                         {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                         {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                         ]'
                  data-textalign="['left','left','left','left']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: 100, textTransform: "uppercase", marginTop: "40px" }}
                >
                  <NavLink
                    to="/about"
                    className="site-button-secondry btn-effect"
                  >
                    бидний тухай
                  </NavLink>
                </div>
              </li>
            </ul>
            <div
              className="tp-bannertimer tp-bottom"
              style={{ visibility: "hidden !important" }}
            />
            <div className="multi-line-animation">
              <div className="multi-line-one">
                <div className="animation-block1 bounce-1" />
              </div>
              <div className="multi-line-two">
                <div className="animation-block2 bounce-2" />
              </div>
              <div className="multi-line-three">
                <div className="animation-block1 bounce-1" />
              </div>
              <div className="multi-line-four">
                <div className="animation-block2 bounce-2" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Slider;
