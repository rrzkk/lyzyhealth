import React from 'react';


import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { allergyinfo } from "./allergydata";

import { useState, useEffect } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron'
import { Card } from 'reactstrap';
import * as Scroll from 'react-scroll';
import infoJson from './infoJson.json';



const infocards = infoJson.map(el => {
    return (
        <div className="col-6 col-md-4">
            <h>{el.figure}</h>
            <p>{el.text}</p>
        </div>
    );
})




function NewInfo() {
    console.log(infoJson);
    return (
        <div className="container">
            <div className="row">
                {infocards}
            </div>
        </div>
    );
}
export default NewInfo

