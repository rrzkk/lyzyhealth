import React from 'react';

import { Button } from 'reactstrap'
import { useHistory } from "react-router-dom"

import { Parallax } from 'react-scroll-parallax';
import { motion, useViewportScroll, useTransform } from "framer-motion";

import { animateScroll as scroll } from 'react-scroll';




const { Page } = require('canvas')


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
    scroll.scrollMore(670);
  }
  return (
    <div>
      <div className="d-none d-lg-block wrapper">
       
        <motion.div className="progressbartc" >
      <Parallax y={[100,0]}><span className="fa fa-arrows-v fa-lg"></span>
      </Parallax>
        
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
                  <div style={{textAlign:"center"}}><h style={{ fontSize: 40, fontFamily: 'ak', color:"#B8390E"}}>Nutritional Deficiency</h></div>
                  <div style={{textAlign:"center"}}><h style={{ fontSize: 20 }} className="homefont">It happens when you body doesn’t absorb from food the necessary amount of a nutrient.</h></div>
                </div>
              </div>
              <Parallax y={[20, 0]} x={[40, -40]} >
                <div className="row  homeban">
                  <div className="col-12 col-md-6 offset-md-5">

                    <div className="container">
                    <div style={{textAlign:"center"}}><h style={{ fontSize: 40, fontFamily: 'ak', color:"#B8390E"}}>We are here to help</h></div>
                    </div>
                    <div style={{textAlign:"start"}}>
                      <br/>
                     
                      <h style={{ fontSize: 20 }} className="homefont">Find out daily challenge, get your allergen substitution and discover relevant knowledge</h></div>

                  </div>

                </div>
              </Parallax>
            </div>

          </Parallax>
        </div>
      </Parallax>

      <Parallax y={[0, 0]}>
        <div className="container homeban1"></div>
      </Parallax>

      <Parallax y={[0, 0]}>
        <div className="container homeban1">
        <Button className="homebtn" size="lg" onClick={scrollMoreDown}><h style={{ fontSize: 30, fontFamily: 'ak', color:"white"}}>Explore more</h></Button>
        </div>
      </Parallax>

      <Parallax y={[0, 0]}>
        <div className="container homeban1"></div>
      </Parallax>

      <div className="container homeban">
        <div className="row">
          <Parallax y={[31, 0]} x={[-20, 60]} className="col-12 col-md-6 ">
            <div className="homeban1">
            <div style={{textAlign:"center"}}><h style={{ fontSize: 40, fontFamily: 'ak', color:"#B8390E"}}>Do you know</h></div>
              <div style={{textAlign:"center"}}><h style={{ fontSize: 20 }} className="homefont">what are the most widespread nutritional deficiencies worldwide?</h></div>
            </div>
           
          </Parallax>
        </div>
      </div>

      <div className="container homeban">
        <div className="row">
          <div className="col-12 col-md-3" style={{textAlign:"center"}}>
            <div className="container homebanNews">
              <div style={{textAlign:"center"}}><h style={{ fontSize: 25, fontFamily: 'ga', color:"#3D550C" }}>iron deficiency</h></div>
              <div style={{textAlign:"center"}}><h style={{ fontSize: 15 }} className="homefont">Anemia affects approximately 25 percent of people worldwide, and iron deficiency is said to be responsible for 50 percent of all anemias.</h></div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="container homebanNews">
              <div style={{textAlign:"center"}}><h style={{ fontSize: 25, fontFamily: 'ga', color:"#3D550C" }}>vitamin D deficiency</h></div>
                <div style={{textAlign:"center"}}><h style={{ fontSize: 15 }} className="homefont">Nearly one third of Australian adults are suffering vitamin D deficiency. Without enough taken, you might have hormonal imbalance, low bone mineral density and High blood pressure</h></div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="container homebanNews">
            <div style={{textAlign:"center"}}><h style={{ fontSize: 25, fontFamily: 'ga', color:"#3D550C" }}>vitamin B deficiency</h></div>
                <div style={{textAlign:"center"}}><h style={{ fontSize: 15 }} className="homefont">Vitamin B12 deficiency affects up to 15 percent of people, and without enough vitamin B12, pale skin, constipation and diarrhea become common.</h></div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="container homebanNews">
            <div style={{textAlign:"center"}}><h style={{ fontSize: 25, fontFamily: 'ga', color:"#3D550C" }}>calcium deficiency</h></div>
                <div style={{textAlign:"center"}}><h style={{ fontSize: 15 }} className="homefont">Over half of all Australians consume inadequate levels of calcium from food sources. Lack of calcium will cause muscle cramping, osteoporosis and dental problems.</h></div>
            </div>
          </div>
        </div>
      </div>

      <Parallax y={[0, 0]}>
        <div className="container homeban1"></div>
      </Parallax>
      {/* <Parallax y={[0, 0]}>
        <div className="container homeban">
        <Parallax y={[0, 0]}>
          <div className="row">
            <div className="col-12 col-md-3">
              
                <div style={{textAlign:"center"}}><h style={{ fontSize: 25, fontFamily: 'ga', color:"#710019" }}>iron deficiency</h></div>
                <div style={{textAlign:"center"}}><h style={{ fontSize: 15 }} className="homefont">Anemia affects approximately 25 percent of people worldwide, and iron deficiency is said to be responsible for 50 percent of all anemias.</h></div>
              
            </div>
            <div className="col-12 col-md-3">
              
            <div style={{textAlign:"center"}}><h style={{ fontSize: 25, fontFamily: 'ga', color:"#710019" }}>vitamin D deficiency</h></div>
                <div style={{textAlign:"center"}}><h style={{ fontSize: 15 }} className="homefont">Nearly one third of Australian adults are suffering vitamin D deficiency. Without enough taken, you might have hormonal imbalance, low bone mineral density and High blood pressure</h></div>
              
            </div>
            <div className="col-12 col-md-3">
              
            <div style={{textAlign:"center"}}><h style={{ fontSize: 25, fontFamily: 'ga', color:"#710019" }}>vitamin B deficiency</h></div>
                <div style={{textAlign:"center"}}><h style={{ fontSize: 15 }} className="homefont">Vitamin B12 deficiency affects up to 15 percent of people, and without enough vitamin B12, pale skin, constipation and diarrhea become common.</h></div>
              
            </div>
            <div className="col-12 col-md-3">
              
            <div style={{textAlign:"center"}}><h style={{ fontSize: 25, fontFamily: 'ga', color:"#710019" }}>calcium deficiency</h></div>
                <div style={{textAlign:"center"}}><h style={{ fontSize: 15 }} className="homefont">Over half of all Australians consume inadequate levels of calcium from food sources. Lack of calcium will cause muscle cramping, osteoporosis and dental problems.</h></div>
              
            </div>
          </div>
          </Parallax>
        </div>
      </Parallax> */}



      <Parallax y={[0, 0]}>
        <div className="container homeban">

          <Parallax y={[0, 0]}>
            
              <div className="row">
                <div className="col-12 col-md-4" style={{textAlign:"center"}}>
                <div className="container homeban3">
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
                  <div style={{textAlign:"center"}}><h style={{ fontSize: 50, fontFamily: 'ak', color:"#B8390E"}}>Challenge</h></div>
                  <h style={{ fontSize: 18 }} className="homefont">If you can finish the challenge everyday,
                  you would get a healthier lifestyle, the nutritional deficiency would never bother you again.</h><br /><br />
       
                  <Button className="btn-lg" onClick={gotoChallenge}>LET'S GO</Button>
                </div>
                </div>
                <div className="col-12 col-md-4" style={{textAlign:"center"}}>
                <div className="container homeban3">            
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
                  <div style={{textAlign:"center"}}><h style={{ fontSize: 50, fontFamily: 'ak', color:"#B8390E"}}>Replacement</h></div>
                  <h style={{ fontSize: 18 }} className="homefont">If you are allergic to some food, you need to find a replacement for it. Otherwise you will lack of the nutrition and get weak.</h><br /><br />
                  <Button className="btn-lg" onClick={gotoAllergy}>DISCOVER</Button>
                </div>
                </div>
                <div className="col-12 col-md-4" style={{textAlign:"center"}}>
                <div className="container homeban3"> 
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
                  <div style={{textAlign:"center"}}><h style={{ fontSize: 50, fontFamily: 'ak', color:"#B8390E"}}>Information</h></div>
                  <h style={{ fontSize: 18 }} className="homefont">If you are allergic to some food, you need to find a replacement for it. Otherwise you will lack of the nutrition and get weak.</h><br /><br />
                  <Button className="btn-lg" onClick={gotoAbout}>FIND MORE</Button>
                </div>
                </div>
              </div>


            
          </Parallax>
        </div>
      </Parallax>

      



    </div>

  );
}

export default Home;

/*function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className=" w-100"
          src={baseUrl+"assets/challenge.png"}
          alt="First slide"
          height='200px'
        />
        <Carousel.Caption>
          <h3>Daily Challenge</h3>
          <p>Want to kick start your healthy lifestyle? Start exercise and eating healthy TODAY!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 "
          src={baseUrl+"assets/peanut.jpg"}
          alt="Third slide"
          height='200px'
        />

        <Carousel.Caption>
          <h3>Allergy Relacement</h3>
          <p>You have an allergy? Don't worried, we will find the replacement food just for you</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 "
          src={baseUrl+"assets/health.jpg"}
          alt="Third slide"
          height='200px'
        />

        <Carousel.Caption>
          <h3>Heath & Disease</h3>
          <p>Here you can find all the information about how to get rid of nutrition deficiency.</p>
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
  );
} */

/*<div>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-10">
              <h1>Welcome to LYZY Health </h1>
              <p>Hi! We are LYZY, guess you are as lazy as we are? Join us to change your lifestyle from today, say goodby to lazy, say hi to LYZY!</p>
            </div>
          </div>
        </div>
      </Jumbotron>
      <div className="row-content">

        <div className="container">

          <div className="row justify-content-center">
            <div className="col-10 ">
              <HomeCarousel />
            </div>
          </div>
          <div className="row justify-content-center" id="homecards">
            <div className="col-10 col-md-3">
              <Card >
                <Card.Img variant="top" height="150px" src={baseUrl+"assets/challenge.png"} />
                <Card.Body>
                  <Card.Title>Daily Challenge</Card.Title>

                  <Button variant="primary" onClick={gotoChallenge}>Go Challenge</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-10 col-md-3">
              <Card>
                <Card.Img variant="top" height="150px" src={baseUrl+"assets/peanut.jpg"} />
                <Card.Body>
                  <Card.Title>Allergy Replacement</Card.Title>

                  <Button variant="primary" onClick={gotoAllergy}>Go Allergy</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-10 col-md-3">
              <Card>
                <Card.Img variant="top" height="150px" src={baseUrl+"assets/health.jpg"} />
                <Card.Body>
                  <Card.Title>Health and Disease</Card.Title>

                  <Button variant="primary" onClick={gotoAbout}>Go About</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div> */