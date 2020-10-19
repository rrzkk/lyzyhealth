import React from 'react';


import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { allergyinfo } from "./allergydata";

import { useState, useEffect } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron'
import { Card } from 'reactstrap';
import * as Scroll  from 'react-scroll';

let Element = Scroll.Element
let scroll = Scroll.animateScroll
let scroller = Scroll.scroller

function scrollMoreDown() {
    scroller.scrollTo('screens',{smooth: true})
  }

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}



function Information(props) {
    const [count, setCount] = useState(0);

    const [isOpen, setIsOpen] = useState(false);
    const [isOn, setIsOn] = useState(false);

    const [secondcount, setSecond] = useState(0);



    const toggleOpen = () => setIsOpen(!isOpen);
    const [groupName, setName] = useState("");
    const { height, width } = useWindowDimensions();


    const scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) { anchorElement.scrollIntoView(); }
        }
    }

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.scrollTo(0, 0);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}




    function tap1() {

        setIsOn(!isOn);
        scrollMoreDown();
        setCount(6);

    }

    function tap2() {

        setIsOn(!isOn);
        scrollMoreDown();
        setCount(1);
    }
    function tap3() {

        setIsOn(!isOn);
        scrollMoreDown();
        setCount(2);
    }
    function tap10() {

        setIsOn(!isOn);
        scrollMoreDown();
        setCount(3);
    }

    function tap5() {

        setIsOn(!isOn);
        scrollMoreDown();
        setCount(0);
    }
    function tap6() {


        setIsOn(!isOn);
        scrollMoreDown();
        setCount(4);
    }
    function tap7() {

        setIsOn(!isOn);
        scrollMoreDown();
        setCount(5);
    }
    function tap8() {

        setIsOn(!isOn);
        scrollMoreDown();
        setCount(7);
    }
    function tap9() {

        setIsOn(!isOn);
        scrollMoreDown();
        setCount(8);
    }

    function GroupOpen(group_name) {
        toggleOpen();
        setName(group_name)
    }

    function RenderLi() {

        const item = allergyinfo[count].alternatives_group.map(
            eachGroup => {
                return (

                    <motion.div className="motionul" layout >
                        <motion.div className="motionli" onClick={() => GroupOpen(eachGroup.group_name)} whileHover={{ scale: 1.2 }}>
                            <img src={require('./'+eachGroup.url)} style={{maxWidth:50, height:'auto'}}/>
                            <b> {eachGroup.group_name}</b>
                            
                            <AnimatePresence>{isOpen && groupName == eachGroup.group_name && <Content propsname={eachGroup.group_name} />}</AnimatePresence>
                        </motion.div>
                    </motion.div>


                );
            }
        )
        return (
            <div className="allergyreplacements">
                {item}

            </div>

        );

    }

    function allergychoose() {
        const item2 = allergyinfo[count].notedetail.map(
            eachGroup => {
                return (
                <li>{eachGroup.content}</li>
                );
            }
        )
        return ( 
            <div>
            <b>{allergyinfo[count].note}</b>
            {item2}
            </div>
            
        );
    }

    function Content(props) {
        const renderContent = allergyinfo[count].alternatives_group.filter((el) => el.group_name === props.propsname)[0].alternatives.map(
            el => {
                return (
                    <div>
                        {el.name}
                    </div>
                );
            }
        )
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, delay: 0.15 }}
                style={{ pointerEvents: "auto" }}

            >
                {renderContent}
            </motion.div>
        );
    }




    return (
        <React.Fragment>
            <div className="container allergytitle">
                <div className="row">
                <a id="allergyhead"></a>
                    <Jumbotron>
                    <h1>Allergen Replacement</h1>
                        <b><p>
                        Do you know which allergen you are allergy to? If you cannot take that food, how can you get the nutrition of them? 
                        Now start to find your own allergen replacement and take similar nutrition with that food to prevent nutritional deficiency.
                    </p></b>

                    </Jumbotron>
                </div>
                <div className="row">
                    <div className="col-6  allergy-title" style={{ textAlign: "center" }}>
                        <b>Choose Your Allergy First</b>
                    </div>
                </div>
            </div>

            <div className="container allergybg">
                <div className="row" style={{ margin: 50 }}>
                    <b><i>* We pick 9 most common allergens below.</i></b>
                </div>
                <div className="row" style={{ margin: 50 }}>
                    <AnimateSharedLayout>

                        <motion.div
                            className="clam"

                            whileHover={{ scale: 0.6 }}
                            onClick={() => tap1()}
                            size={200}
                            radius={30}

                        >
                            {(6 === count) && (
                                <motion.div

                                    className="outlineA"

                                    animate={{ borderColor: "#ffaa00" }}

                                />
                            )}
                        </motion.div>
                    </AnimateSharedLayout>


                    <AnimateSharedLayout>
                        <motion.div
                            visable={isOn}
                            className="eggs"

                            whileHover={{ scale: 0.6 }}
                            onClick={() => tap2()}
                            size={200}
                            radius={30}

                        >
                            {(1 === count) && (
                                <motion.div

                                    className="outlineA"

                                    animate={{ borderColor: "#FF7F00" }}

                                />
                            )}
                        </motion.div>
                    </AnimateSharedLayout>
                    <AnimateSharedLayout>
                        <motion.div
                            className="fish"

                            whileHover={{ scale: 0.6 }}
                            onClick={() => tap3()}
                            size={200}
                            radius={30}

                        >
                            {(2 === count) && (
                                <motion.div

                                    className="outlineA"

                                    animate={{ borderColor: "#ffaa00" }}

                                />
                            )}
                        </motion.div>
                    </AnimateSharedLayout>
                </div>
                <div className="row" style={{ margin: 50 }}>
                    <AnimateSharedLayout>
                        <motion.div
                            className="wheat"

                            whileHover={{ scale: 0.6 }}
                            onClick={() => setIsOn(!isOn), () => tap10()}
                            size={200}
                            radius={30}

                        >
                            {(3 === count) && (
                                <motion.div

                                    className="outlineA"

                                    animate={{ borderColor: "#FF7F00" }}

                                />
                            )}
                        </motion.div>
                    </AnimateSharedLayout>
                    <AnimateSharedLayout>
                        <motion.div
                            className="milk"

                            whileHover={{ scale: 0.6 }}
                            onClick={() => tap5()}
                            size={200}
                            radius={30}

                        >
                            {(0 === count) && (
                                <motion.div

                                    className="outlineA"

                                    animate={{ borderColor: "#ffaa00" }}

                                />
                            )}
                        </motion.div>
                    </AnimateSharedLayout>
                    <AnimateSharedLayout>
                        <motion.div
                            className="peanut"

                            whileHover={{ scale: 0.6 }}
                            onClick={() => tap6()}
                            size={200}
                            radius={30}

                        >
                            {(4 === count) && (
                                <motion.div

                                    className="outlineA"

                                    animate={{ borderColor: "#2E2B5F" }}

                                />
                            )}
                        </motion.div>
                    </AnimateSharedLayout>
                </div>
                <div className="row" style={{ margin: 50 }}>
                    <AnimateSharedLayout>
                        <motion.div
                            className="seeds"

                            whileHover={{ scale: 0.6 }}
                            onClick={() => tap7()}
                            size={200}
                            radius={30}

                        >
                            {(5 === count) && (
                                <motion.div

                                    className="outlineA"

                                    animate={{ borderColor: "#0000FF" }}

                                />
                            )}
                        </motion.div>
                    </AnimateSharedLayout>
                    <AnimateSharedLayout>
                        <motion.div
                            className="soybean"

                            whileHover={{ scale: 0.6 }}
                            onClick={() => tap8()}
                            size={200}
                            radius={30}

                        >
                            {(7 === count) && (
                                <motion.div

                                    className="outlineA"

                                    animate={{ borderColor: "#2E2B5F" }}

                                />
                            )}
                        </motion.div>
                    </AnimateSharedLayout>
                    <AnimateSharedLayout>
                        <motion.div
                            className="treenuts"

                            whileHover={{ scale: 0.7 }}
                            onClick={() => tap9()}
                            size={200}
                            radius={30}

                        >
                            {(8 === count) && (
                                <motion.div

                                    className="outlineA"

                                    animate={{ borderColor: "#8B00FF" }}

                                />
                            )}

                        </motion.div>
                    </AnimateSharedLayout>
                </div>


            </div>

            <div className="container ">
                <div className="row">
                    <Element name="screens"></Element>
                    <div className="col-6 allergy-title" style={{ textAlign: "center" }}>
                        <b>Here is Your Replacement</b>
                    </div>
                </div>
            </div>

            <div className="container allergybg">
                <div className="row " style={{ margin: 50 }}>
                    <b><i>* Replacements below are only for suggestions, please consult your healthcare professional for more details.</i></b>
                    {allergychoose()}
                </div>
                <div className="row " style={{ margin: 50 }}>
                    <AnimateSharedLayout type="crossfade">
                        {RenderLi()}

                    </AnimateSharedLayout>
                </div>
                
            </div>





        </React.Fragment>
    );

}
export default Information

