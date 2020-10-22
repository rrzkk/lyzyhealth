import React from 'react';

import { Button } from 'reactstrap'
import { useHistory } from "react-router-dom"

import { Parallax } from 'react-scroll-parallax';
import { motion, useViewportScroll, useTransform } from "framer-motion";

import * as Scroll from 'react-scroll';






let Element = Scroll.Element
let scroll = Scroll.animateScroll
let scroller = Scroll.scroller

function Home(props) {
  let history = useHistory();

  function gotoChallenge() {
    history.push("/diagnose");
  }
  function gotoAllergy() {
    history.push("/information");
  }
  function gotoAbout() {
    history.push("/about")
  }
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  function scrollMoreDown() {
    scroller.scrollTo('doyouknow', { smooth: true })
  }
  function toTop(){
    window.scrollTo(0, 0);
  }

  return (
    <div>
      {/* <div className="d-none d-lg-block wrapper">

        <motion.div className="progressbartc" >
          <Parallax y={[100, 0]}><span className="fa fa-arrows-v fa-lg"></span>
          </Parallax>

        </motion.div>

      </div> */}
      {/* scroll to top */}
      <div className="d-none d-lg-block wrapper">

        <motion.div className="progressbartc" >
        <Button className="scrollTop" onClick={toTop}></Button>

        </motion.div>

      </div>
      
      


      <Parallax y={[0, 0]}>
        <div className="container homeban1"></div>
      </Parallax>
      <Parallax y={[0, 0]}>
        <div className="container homeban">
          <Parallax y={[0, 0]} x={[0, 20]}>
            <div className="container ">
              <div className="row">
                <div className="col-12 col-md-6 homeban1">
                  <div style={{ textAlign: "center" }}><h style={{ fontSize: 40, fontFamily: 'ak', color: "#B8390E" }}>Do you know that:</h></div>
                </div>
              </div>
            </div>

          </Parallax>
          {/* add the facts here */}
          <div className="container homebanblank"></div>
          <div className='row'>
            <div className="col-12 col-md-4" style={{ textAlign: "center" }}><img src={require('../homepage/pie1.png')} width='300px' /></div>
            <div className="col-12 col-md-4" style={{ textAlign: "center" }}><img src={require('../homepage/pie2.png')} width='300px' /></div>
            <div className="col-12 col-md-4" style={{ textAlign: "center" }}><img src={require('../homepage/pie3.png')} width='300px' /></div>
          </div>
          <Parallax y={[20, 0]} x={[40, -40]} >
            <div className="row homebannew">
              <div className="col-12 col-md-6 offset-md-6" >

                <div className="container">
                  <div style={{ textAlign: "center" }}><h style={{ fontSize: 40, fontFamily: 'ak', color: "#B8390E" }}>If you are in one of groups above</h></div>
                </div>
                <div style={{ textAlign: "start" }}>
                  <br />

                  <h style={{ fontSize: 20 }} className="homefont">You are probably at the risk of Nutritional Deficiency!</h></div>

              </div>

            </div>
          </Parallax>
        </div>

      </Parallax>

      <Parallax y={[0, 0]}>
        <div className="container homeban1"></div>
      </Parallax>

      <Parallax y={[0, 0]}>
        <div className="container homeban1">
          <Button className="homebtn" size="lg" onClick={scrollMoreDown}><h style={{ fontSize: 30, fontFamily: 'ak', color: "white" }}>Explore more</h></Button>
        </div>
      </Parallax>

      <Parallax y={[0, 0]}>
        <div className="container homeban1"></div>
      </Parallax>
      <Parallax y={[0, 0]}>
        <Element name="doyouknow"></Element>
        <div className="container homeban1"></div>
      </Parallax>

      <div className="container homeban">
      <div className="homebanblank"></div>
        <div className="row">
          <Parallax y={[31, 0]} x={[-20, 60]} className="col-12 col-md-6 ">
            <div className="homeban1">
              <div style={{ textAlign: "center" }}><h style={{ fontSize: 40, fontFamily: 'ak', color: "#B8390E" }}>Nutritional Deficiency</h></div>
              <div style={{ textAlign: "center" }}><h style={{ fontSize: 20 }} className="homefont">Understand it before fighting it! Let's give some knowledge.</h></div>
            </div>
          </Parallax>
        </div>
      </div>

      <div className="container homeban">
        <div className="homebanblank"></div>
        <div className="row">
          <div className="col-12 col-md-2" style={{ textAlign: "center" }}></div>
          <div className="col-12 col-md-12" style={{ textAlign: "center" }}>
            <div className="container homeban3">
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="homebaninfo"></div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="homebanblank"></div>
                  <h style={{ fontSize: 18 }} className="homefont">Nutritional Deficiency can cause tiredness, short of breath, loss of weight, obesity, and many more negative effects on you body. Having a light symptom can indicate that you are at the risk of Nutritional Deficiency.</h>
                  <div className="homebanblank"></div>
                  <Button className="btn-lg" onClick={gotoAbout} style={{ alignSelf: 'center' }}>FIND MORE KNOWLEDGE</Button></div>
                <div className="col-12 col-md-4">
                  <motion.div
                    animate={{
                      scale: [1, 1, 0.8, 0.8, 1],
                      rotate: [0, 0, 0, 0, 0],
                      borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.5, 0.8, 1],
                      loop: Infinity,
                      repeatDelay: 1
                    }}
                    className="inficon"
                  >

                  </motion.div>
                  <div style={{ textAlign: "center" }}><h style={{ fontSize: 50, fontFamily: 'ak', color: "#B8390E" }}>Knowledge</h></div></div>

              </div></div>
          </div>
        </div>
      </div>

      <div className="container homeban">
        <div className="homebanblank"></div>
        <div className="homebanblank"></div>
        <div className="row">

          <Parallax y={[20, 0]} x={[100, 40]} className="col-12 col-md-6 ">
            <div className="homeban1">
              <div style={{ textAlign: "center" }}><h style={{ fontSize: 40, fontFamily: 'ak', color: "#B8390E" }}>Are you allergic?</h></div>
              <div style={{ textAlign: "center" }}><h style={{ fontSize: 20 }} className="homefont">Finding your allergen replacement ahead of starting a health challenge.</h></div>
            </div>

          </Parallax>
        </div>
      </div>

      <div className="container homeban">
        <div className="homebanblank"></div>
        <div className="row">
          <div className="col-12 col-md-2" style={{ textAlign: "center" }}></div>
          <div className="col-12 col-md-12" style={{ textAlign: "center" }}>
            <div className="container homeban3">
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="homebanblank"></div>
                  <div className="homebanblank"></div>
                  <img src={require('../homepage/bar10.png')} width='350px' />
                </div>
                <div className="col-12 col-md-4">
                  <div className="homebanblank"></div>
                  <h style={{ fontSize: 18 }} className="homefont">If you are allergic to some food, you need to find a replacement for it. Otherwise you might lack of the nutrition and get weak. Don't let it be a stumbling block when starting a health plan of diet.</h><br /><br />
                  <Button className="btn-lg" onClick={gotoAllergy}>DISCOVER</Button>
                </div>
                <div className="col-12 col-md-4">
                  <motion.div
                    animate={{
                      scale: [1, 1, 1, 1, 1],
                      rotate: [0, 5, 360, 360, 0],
                      borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.5, 0.9, 1],
                      loop: Infinity,
                      repeatDelay: 1
                    }}
                    className="repicon"
                  >

                  </motion.div>
                  <div style={{ textAlign: "center" }}><h style={{ fontSize: 50, fontFamily: 'ak', color: "#B8390E" }}>Allergy</h></div>
                </div></div>
            </div>
          </div>

        </div>
      </div>

      <div className="container homeban">
      <div className="homebanblank"></div>
        <div className="homebanblank"></div>
        <div className="row">

          <Parallax y={[31, 0]} x={[-20, 60]} className="col-12 col-md-6 ">
            <div className="homeban1">
              <div style={{ textAlign: "center" }}><h style={{ fontSize: 40, fontFamily: 'ak', color: "#B8390E" }}>Start challenge now!</h></div>
              <div style={{ textAlign: "center" }}><h style={{ fontSize: 20 }} className="homefont">Choosing a challenge and sticking at it. You will get a health body.</h></div>
            </div>

          </Parallax>
        </div>
      </div>

      <div className="container homeban">
      <div className="homebanblank"></div>
        <div className="row">
          <div className="col-12 col-md-2" style={{ textAlign: "center" }}></div>
          <div className="col-12 col-md-12" style={{ textAlign: "center" }}>
            <div className="container homeban3">
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="homebanhurdle"></div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="homebanblank"></div>
                  <h style={{ fontSize: 18 }} className="homefont">We provide you eating challenge, not eating challenge and exercising challenge. They are designed by health guidence and can bring you a health body. You can also see your friends in the rankings board. Now join the game and race with friends.</h><br /><br />
                  <Button className="btn-lg" onClick={gotoChallenge}>Let's go</Button>
                </div>
                <div className="col-12 col-md-4">
                  <motion.div
                    animate={{
                      scale: [1, 1, 1, 1, 1],
                      rotate: [-15, -15, 15, 15, -15],

                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.6, 0.8, 1],
                      loop: Infinity,
                      repeatDelay: 1
                    }}
                    className="chaicon"
                  >
                  </motion.div>
                  <div style={{ textAlign: "center" }}><h style={{ fontSize: 50, fontFamily: 'ak', color: "#B8390E" }}>Challenge</h></div>
                </div></div>
            </div>
          </div>

        </div>
      </div>
      {/* <Parallax y={[0, 0]}>
        <div className="container homeban1"></div>
      </Parallax> */}








    </div>

  );
}

export default Home;

