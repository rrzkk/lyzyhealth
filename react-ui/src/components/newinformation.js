import React from 'react';


import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { allergyinfo } from "./allergydata";

import { useState, useEffect } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron'
import { Button, Card, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import * as Scroll from 'react-scroll';
import infoJson from './infoJson.json';
import infoContent from './infoContentJson.json';

//This is a scroll element
const moveToElement = (elementId) => {
    let element = document.getElementById(elementId);
    if (element) {
        let offsetTop = 0;
        do {
            offsetTop += element.offsetTop;
            element = element?.offsetParent;
        } while (element);
        window.scrollTo({ behavior: "smooth", top: offsetTop - 76 });
    }
};
function changingDiv(evt, currentDiv, setDiv) {
    console.log("evt is " + evt);
    if (typeof evt !== 'undefined') {
        if (currentDiv === 1) {
            if (evt.nativeEvent.wheelDelta < 0) {
                setDiv(2);
                moveToElement("fullscreendiv2");
            }
        }
        else if (currentDiv === 2) {
            if (evt.nativeEvent.wheelDelta > 0) {
                setDiv(1);
                moveToElement("fullscreendiv1");
            }
            else {
                setDiv(3);
                moveToElement("fullscreendiv3");
            }
        }
        else if (currentDiv === 3) {
            if (evt.nativeEvent.wheelDelta > 0) {
                setDiv(2);
                moveToElement("fullscreendiv2");
            }
            else {
                setDiv(4);
                moveToElement("fullscreendiv4");
            }
        }
        else if (currentDiv === 4) {
            if (evt.nativeEvent.wheelDelta > 0) {
                setDiv(3);
                moveToElement("fullscreendiv3");
            }
            else {
                setDiv(5);
                moveToElement("fullscreendiv5");
            }
        }
        else if (currentDiv === 5) {
            if (evt.nativeEvent.wheelDelta > 0) {
                setDiv(4);
                moveToElement("fullscreendiv4");
            }
            else {
                setDiv(6);
                moveToElement("fullscreendiv6");
            }
        }
        else {
            if (evt.nativeEvent.wheelDelta > 0) {
                setDiv(5);
                moveToElement("fullscreendiv5");
            }
        }
    }
}
//This is the TOP of the page shows the FIGURE
function infoCards() {
    return (infoJson.map((el, index) => {
        const [counter, setCounter] = useState(0);
        //slice the figure
        let figure;
        let symbol = '';
        if (el.figure.endsWith('%')) {
            figure = el.figure.slice(0, -1);
            symbol = '%';
        }
        else { figure = el.figure }
        //set the parameters of animation
        let duration = 2000;
        let parseFigure = parseInt(figure);
        let stepTime = duration / parseFigure;
        useEffect(() => {
            if (counter < parseFigure) {
                if (parseFigure / duration > 16) {
                    if (counter + Math.ceil(parseFigure * 16 / duration) < parseFigure) {
                        setTimeout(() => { setCounter(counter + Math.ceil(parseFigure * 16 / duration)); }, 16);
                    }
                    else { setCounter(parseFigure) }
                }
                else setTimeout(() => { setCounter(counter + 1); }, stepTime);
            }
        }, [counter]);

        return (
            <div className="col-6 col-md-4 infotopcard" style={{}}>
                <h className="infoNum">{counter}{symbol}</h>
                <p className="infoDes">{el.text}</p>
            </div>
        );

    }))
}
//a subfunction from infoContentCard
function symtoms(symptoms) {
    return symptoms.map(el => {
        return (
            <div>
                {el.text}
            </div>
        );
    });
}
//a subfunction from infoContentCard
function solution(solutions) {
    return solutions.map((el, index) => {
        return (
            <div>
                <b>
                    {el.title}
                </b>
                <p>
                    {el.content}
                </p>
            </div>
        );
    });
}
//This is the second part of the page showing the content of the page
/*
<div className="col-12 ">
                            <b>{el.title}</b>
                            <p>{el.text}</p>
                        </div>
                        <div className="col-12 col-md-3 ">
                            <b>Symptoms</b>
                            {symtoms(el.symptoms)}
                        </div>
                        <div className="col-12 col-md-9 ">
                            <b>Prevention</b>
                            {solution(el.prevent)}
                        </div>*/
function infoContentCards(currentDiv, setDiv, setTitle, setSymptom, setPrevention) {
    return infoContent.map((el, index) => {
        return (

            <div
                className=" fullscreendiv infoContent"
                id={`fullscreendiv${index + 2}`}
                onWheel={(evt) => { changingDiv(evt, currentDiv, setDiv) }}>
                
                <img src={require(`../infoassets/infobackground${index + 1}.png`)}
                    className=' infosubbg'

                >
                </img>
                <div className="row infosubCont">
                    <img src={require(`../infoassets/infotitle.png`)} className="infotitleimg"></img>
                    <img src={require(`../infoassets/infosub${index + 1}.png`)} className="infotitlesub"
                        onClick={() => { setTitle(true) }}></img>
                    <div className="infoflex1">
                        <img src={require(`../infoassets/prevention${index + 1}.png`)}
                            onClick={() => { setSymptom(true) }}></img>
                        <img src={require(`../infoassets/preventiontitle.png`)}
                            onClick={() => { setSymptom(true) }}></img>
                    </div>

                    <div className="infoflex2">
                        <img width="50%" src={require(`../infoassets/symptoms${index + 1}.png`)}
                            onClick={() => { setPrevention(true) }}></img>
                        <img src={require(`../infoassets/symptomtitle.png`)}
                            onClick={() => { setPrevention(true) }}></img>
                    </div>

                </div>

            </div>

        );
    });
}
//modal
function renderModalTitle(key, state, setState) {
    if (key !== 1)
        return (
            <Modal isOpen={state} toggle={() => setState(false)}>
                <ModalHeader>{infoContent[key - 2].title}</ModalHeader>
                <ModalBody>{infoContent[key - 2].text}</ModalBody>
                <ModalFooter>
                    <Button onClick={() => { setState(false) }} color="danger">close</Button>
                </ModalFooter>
            </Modal>
        );
}
function renderModalSymptoms(key, state, setState) {
    if (key !== 1)
        return (
            <Modal isOpen={state} toggle={() => setState(false)}>
                <ModalHeader>Symptoms</ModalHeader>
                <ModalBody>{symtoms(infoContent[key - 2].symptoms)}</ModalBody>
                <ModalFooter>
                    <Button onClick={() => { setState(false) }} color="danger">close</Button>
                </ModalFooter>
            </Modal>
        );
}
function renderModalPrevention(key, state, setState) {
    if (key !== 1)
        return (
            <Modal isOpen={state} toggle={() => setState(false)}>
                <ModalHeader>{infoContent[key - 2].title}</ModalHeader>
                <ModalBody>{solution(infoContent[key - 2].prevent)}</ModalBody>
                <ModalFooter>
                    <Button onClick={() => { setState(false) }} color="danger">close</Button>
                </ModalFooter>
            </Modal>
        );
}
//main function
function NewInfo() {
    const [currentDiv, setDiv] = useState(1);

    const [title, setTitle] = useState(false);
    const [symptom, setSymptom] = useState(false);
    const [prevention, setPrevention] = useState(false);
    return (
        <div className=" infobackground fullscreenwid">
            {(currentDiv===2)&&<img src={require("../infoassets/infobutton.png")} className="infoBtn1"/>}
            {(currentDiv===3)&&<img src={require("../infoassets/infobutton.png")} className="infoBtn2"/>}
            {(currentDiv===4)&&<img src={require("../infoassets/infobutton.png")} className="infoBtn3"/>}
            {(currentDiv===5)&&<img src={require("../infoassets/infobutton.png")} className="infoBtn4"/>}
            {(currentDiv===6)&&<img src={require("../infoassets/infobutton.png")} className="infoBtn5"/>}
            <div className="row fullscreendiv" id="fullscreendiv1" onWheel={(evt) => { changingDiv(evt, currentDiv, setDiv) }}>
                {infoCards()}
            </div>
            {infoContentCards(currentDiv, setDiv, setTitle, setSymptom, setPrevention)}
           

            {renderModalTitle(currentDiv, title, setTitle)}
            {renderModalSymptoms(currentDiv, symptom, setSymptom)}
            {renderModalPrevention(currentDiv, prevention, setPrevention)}
        </div>
    );
}

export default NewInfo

