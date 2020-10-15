import React from 'react';


import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { allergyinfo } from "./allergydata";

import { useState, useEffect } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron'
import { Card } from 'reactstrap';
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
        window.scrollTo({ behavior: "smooth", top: offsetTop - 78 });
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
        else {
            if (evt.nativeEvent.wheelDelta > 0) {
                setDiv(2);
                moveToElement("fullscreendiv2");
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
function infoContentCards(currentDiv, setDiv) {
    return infoContent.map((el, index) => {
        return (
            <div>
                <div
                    className="row fullscreendiv infoContent"
                    id={`fullscreendiv${index + 2}`}
                    onWheel={(evt) => { changingDiv(evt, currentDiv, setDiv) }}>
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
                    </div>
                </div>
            </div>
        );
    });
}
//main function
function NewInfo() {
    const [currentDiv, setDiv] = useState(1);
    return (
        <div className=" infobackground fullscreenwid">
            <div className="row fullscreendiv" id="fullscreendiv1" onWheel={(evt) => { changingDiv(evt, currentDiv, setDiv) }}>
                {infoCards()}
            </div>
            {infoContentCards(currentDiv, setDiv)}
        </div>
    );
}

export default NewInfo

