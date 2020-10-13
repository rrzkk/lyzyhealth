import React from 'react';


import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { allergyinfo } from "./allergydata";

import { useState, useEffect } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron'
import { Card } from 'reactstrap';
import * as Scroll from 'react-scroll';
import infoJson from './infoJson.json';
import infoContent from './infoContentJson.json';



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
        let duration = 1000;
        let parseFigure = parseInt(figure);
        let stepTime = duration/parseFigure ;

        useEffect(()=>{
            if(counter!==parseFigure){
                if(parseFigure>1000){
                    setTimeout(()=>{setCounter(counter+5000);},stepTime);
                }
                else setTimeout(()=>{setCounter(counter+1);},stepTime);
            }
        },[counter]);

        return (
            <div className="col-6 col-md-4">
                <h>{index}</h><br />
                <h>{counter}{symbol}</h>
                <p>{el.text}</p>
            </div>
        );
    }))
}

//This is the counting number effect of the infoCards 
// function animateValue(start, end, duration) {

//     var range = end - start;
//     var current = start;
//     var stepTime = Math.abs(Math.floor(duration / range));

//     var timer = setInterval(function() {
//         current += increment;
//         obj.innerHTML = current;
//         if (current == end) {
//             clearInterval(timer);
//         }
//     }, stepTime);
// }

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
    return solutions.map(el => {
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
const infoContentCards = infoContent.map(el => {
    return (
        <div className="row">
            <div className="col-12">
                <b>{el.title}</b>
                <p>{el.text}</p>
            </div>
            <div className="col-12 col-md-3">
                <b>Symptoms</b>
                {symtoms(el.symptoms)}
            </div>
            <div className="col-12 col-md-9">
                <b>Prevention</b>
                {solution(el.prevent)}
            </div>
        </div>
    );
});

//main function
function NewInfo() {

    return (
        <div className="container infobackground">
            <div className="row">
                {infoCards()}
            </div>
            {infoContentCards}
        </div>
    );
}
export default NewInfo

