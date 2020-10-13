import React from 'react';


import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { allergyinfo } from "./allergydata";

import { useState, useEffect } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron'
import { Card } from 'reactstrap';
import * as Scroll from 'react-scroll';
import infoJson from './infoJson.json';
import infoContent from './infoContentJson.json';



const infoCards = infoJson.map((el,index) => {
   
    return (
        <div className="col-6 col-md-4">
            <h>{index}</h><br/>
            <h>{el.figure}</h>
            <p>{el.text}</p>
        </div>
    );
});

function symtoms(symptoms){
    return symptoms.map(el=>{
        return(
        <div>
            {el.text}    
        </div>
        );
    });
}
function solution(solutions){
    return solutions.map(el=>{
        return(
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

const infoContentCards=infoContent.map(el=>{
    return(
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


function NewInfo() {
 
    return (
        <div className="container infobackground">
            <div className="row">
                {infoCards}
            </div>
            {infoContentCards}
        </div>
    );
}
export default NewInfo

