import React, { useReducer } from 'react';
import { motion, useMotionValue, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import { useState, useEffect, useRef } from 'react';
import { useCycle } from 'framer';
import Card from 'react-bootstrap/Card';
import { Button, FormGroup, Label, Input, Popover, PopoverHeader, PopoverBody, Row, Modal, Table } from 'reactstrap';
import { newchallenges } from './fakechallengedata';
import { login } from '../react/login';
import * as Scroll from 'react-scroll';
import { useAlert } from "react-alert";


let Element = Scroll.Element
let scroll = Scroll.animateScroll
let scroller = Scroll.scroller
let initial = 0;

const animation = (state = 0, action) => {
    switch (action) {
        case 'MOVE':
            if (state === 3) {
                state = 0;
                initial = 0;
            }
            else {
                state = state + 1;

                initial = state;

            };
        default:
            return state;
    }
};




function ChallengeCom(props) {



    const [count, dispatchC] = useReducer(animation, initial);

    const componentRef = useRef();

    //const { width, height } = useResize(componentRef)
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const [eatlvl, seteatlvl] = useState(1);
    const [noeatlvl, setnoeatlvl] = useState(1);
    const [exerciselvl, setexerciselvl] = useState(1);
    const [eatlvl2, seteatlvl2] = useState("");
    const [noeatlvl2, setnoeatlvl2] = useState(1);
    const [exerciselvl2, setexerciselvl2] = useState(1);

    const [popover1, togglepopover1] = useState(false);
    const [popover2, togglepopover2] = useState(false);
    const [popover3, togglepopover3] = useState(false);
    const [popover4, togglepopover4] = useState(false);
    const [popover5, togglepopover5] = useState(false);
    const [popover6, togglepopover6] = useState(false);

    const eatingChallenge = newchallenges.filter(el => el.type === 'eating');
    const eatingChallengelist = [eatingChallenge.filter(el => el.level === 1),
    eatingChallenge.filter(el => el.level === 2),
    eatingChallenge.filter(el => el.level === 3),
    eatingChallenge.filter(el => el.level === 4),
    eatingChallenge.filter(el => el.level === 5)];


    const noEatingChallenge = newchallenges.filter(el => el.type === 'not eating');
    const noEatingChallengelist = [
        noEatingChallenge.filter(el => el.level === 1),
        noEatingChallenge.filter(el => el.level === 2),
        noEatingChallenge.filter(el => el.level === 3)
    ];

    const exerciseChallenge = newchallenges.filter(el => el.type === 'exercising');
    const exerciseChallengelist = [
        exerciseChallenge.filter(el => el.level === 1),
        exerciseChallenge.filter(el => el.level === 2),
        exerciseChallenge.filter(el => el.level === 3)
    ];

    const [eatingLength, setEatingLength] = useState(eatingChallengelist[eatlvl - 1].length);
    const [noEatingLength, setNoEatingLength] = useState(noEatingChallengelist[noeatlvl - 1].length);
    const [exerciseLength, setExerciseLength] = useState(exerciseChallengelist[exerciselvl - 1].length);

    const [eatingNo, setEatingNo] = useState(0);
    const [noEatingNo, setNoEatingNo] = useState(0);
    const [exerciseNo, setExerciseNo] = useState(0);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginmodel, togglemodel] = useState(false);




    const scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) { anchorElement.scrollIntoView(); }
        }
    }

    useEffect(() => {
        setWidth(componentRef.current.offsetWidth);
        setHeight(componentRef.current.offsetHeight);

        setEatingLength(eatingChallengelist[eatlvl - 1].length);
        setNoEatingLength(noEatingChallengelist[noeatlvl - 1].length);
        setExerciseLength(exerciseChallengelist[exerciselvl - 1].length);

        const handleResize = () => {
            setWidth(componentRef.current.offsetWidth);
            setHeight(componentRef.current.offsetHeight);
        };


        // scrollToAnchor('challengehead');

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };



    }, [componentRef]);





    function changeEat() {
        if (eatingNo + 1 === eatingLength) { setEatingNo(0) }
        else setEatingNo(eatingNo + 1)
    }
    function changeNo() {
        if (noEatingNo + 1 === noEatingLength) { setNoEatingNo(0) }
        else setNoEatingNo(noEatingNo + 1)
    }
    function changeEx() {
        if (exerciseNo + 1 === exerciseLength) { setExerciseNo(0) }
        else setExerciseNo(exerciseNo + 1)
    }

    const [cid, idcycle] = useCycle(0, 1, 2, 3, 4, 5);



    // const [animate, cycle] = useCycle({ x: 0, y: -height / 2.8, scale: 1 }, { x: width / 6, y: -height / 1.8, scale: 1.2 }, { x: width / 2.6, y: -height / 3, scale: 1.3 }
    //     , { x: width * 2 / 3, y: -height / 1.2, scale: 1.4 });
    const animatePos = [{ x: 0, y: -height / 2.8, scale: 1 }, { x: width / 6, y: -height / 1.8, scale: 1.2 }, { x: width / 2.6, y: -height / 3, scale: 1.3 }
        , { x: width * 2 / 3, y: -height / 1.2, scale: 1.4 }]

    const animate = animatePos[count];
    function cycle() {
        dispatchC('MOVE');
    }

    async function moveCar() {


        cycle();
        idcycle();

    }

    function changelvl1(evt) {

        setEatingNo(0);
        if (evt.target.value === "vegetables") {
            seteatlvl(parseInt(1));
            seteatlvl2("vegetables");
        } else if (evt.target.value === "fruits") {
            seteatlvl(parseInt(2));
            seteatlvl2("fruits");
        } else if (evt.target.value === "grain food") {
            seteatlvl(parseInt(3));
            seteatlvl2("grain food");
        } else if (evt.target.value === "meat and bean products") {
            seteatlvl(parseInt(4));
            seteatlvl2("meat and bean products");
        } else if (evt.target.value === "dairy products") {
            seteatlvl(parseInt(5));
            seteatlvl2("dairy products");
        }

        setEatingLength(eatingChallengelist[eatlvl - 1].length);
    }
    function changelvl2(evt) {

        setNoEatingNo(0);
        if (evt.target.value === "easy") {
            setexerciselvl(parseInt(1));
            setexerciselvl2("easy");
        } else if (evt.target.value === "medium") {
            setexerciselvl(parseInt(2));
            setexerciselvl2("medium");
        } else if (evt.target.value === "difficult") {
            setexerciselvl(parseInt(3));
            setexerciselvl2("difficult");
        }
        setNoEatingLength(noEatingChallengelist[noeatlvl - 1].length);
    }
    function changelvl3(evt) {

        setExerciseNo(0);
        if (evt.target.value === "easy") {
            setnoeatlvl(parseInt(1));
            setnoeatlvl2("easy");
        } else if (evt.target.value === "medium") {
            setnoeatlvl(parseInt(2));
            setnoeatlvl2("medium");
        } else if (evt.target.value === "difficult") {
            setnoeatlvl(parseInt(3));
            setnoeatlvl2("difficult");
        }
        setExerciseLength(exerciseChallengelist[exerciselvl - 1].length);
    }
    function checkval(t) {
        var re = /[A-Za-z0-9]+/;//only character and number
       if (re.test(t)) {
          return true;
        } else {
          return false;
        }
      }
    function changeUsername(evt) {
        if (checkval(evt.target.value)) {
            setUsername(evt.target.value);
        } else {
            alert.show("you can only enter number and letters");
        }       
    }
    function changePassword(evt) {
        if (checkval(evt.target.value)) {
            setPassword(evt.target.value);
        } else {
            alert.show("you can only enter number and letters");
        }       
    }

    async function verifycreate(username, password) {
        await props.verifyRepeat(username, password);


    }


    async function verifyLogin(username, passowrd) {
        await props.verifyUser(username, passowrd);
        await props.getUserChallenge(username);
        scrollProgress();
        //scrollMoreDown() ;
    }
    function logOff(){
        props.verifyPassWord('24332','23435');
    }

    function scrollMoreDown() {
        scroller.scrollTo('progressE', { smooth: true })
    }

    function scrollProgress() {
        scroller.scrollTo('selectprogress', { smooth: true });
    }

    const loginstatus = (username, length) => {
        if (!props.login) {
            return (<Button onClick={() => togglemodel(!loginmodel)} color='warning'>Login/Signup</Button>);
        }
        else {
            return (
                <div><b>Hi, {props.username.username}</b><br />
                    <b>You have earned {length} challenge points</b><br /><br />
                    <b>Unlock new car by finishing more challenges</b><br /><br />
                    <ul style={{ listStyle: "none" }}>
                        <li><img src={require('../challengeassets/bike.png')} width='50px' /><a>: Finish 0-3 challenges, unlock a bike</a> </li>
                        <li><img src={require('../challengeassets/car1.png')} width='50px' /><a>: Finish 3-5 challenges, unlock a mini</a> </li>
                        <li><img src={require('../challengeassets/car2.png')} width='50px' /><a>: Finish 5-10 challenges, unlock a sedan</a> </li>
                        <li><img src={require('../challengeassets/car3.png')} width='50px' /><a>: Finish 10-15 challenges, unlock a coupe</a> </li>
                        <li><img src={require('../challengeassets/car4.png')} width='50px' /><a>: Finish 15+ challenges, unlock a rocket</a> </li>
                    </ul>
                    <Button color='warning' onClick={()=>logOff()}>Log off</Button>
                   
                </div>);
        }
    }

    const rankinglist = () => {
        //const test = props.uc;
        //if (test.length > 10) {
        //  test = test.slice(0, 10);
        //}
        //const itemsR = test.map(el => { return (<ListGroupItem>{el.username}</ListGroupItem>) });

        const itemT = props.uc.slice(0, 10).map((el, index) => {
            return (
                <tr>
                    <th>{index + 1}</th>
                    <td>{el.username}</td>
                    <td>{el.count}</td>
                </tr>
            )
        });
        return (itemT);

    }

    const carchange = (length) => {
        if (length > 14) {
            return (<img className="racecar" src={require('../challengeassets/car4.png')}></img>);
        }
        else if (length > 9) {
            return (<img className="racecar" src={require('../challengeassets/car3.png')}></img>);
        }
        else if (length > 4) {
            return (<img className="racecar" src={require('../challengeassets/car2.png')}></img>);
        }
        else if (length > 2) {
            return (<img className="racecar" src={require('../challengeassets/car1.png')}></img>);
        }
        else {
            return (<img className="racecar" src={require('../challengeassets/bike.png')}></img>)
        }
    }
    function finishBtn() {
        if (props.login) {
            props.postChallenge(props.username.username);
            props.getUserChallenge(props.username.username);
            cycle();
        }
        else { alert("You Need Log in To Upgrade") }

    }

    function addP1() {
        if (!addProgressBtn2 && !addProgressBtn3) {
            toggleDis1(!addProgressBtn1);
            toggleText1();
        }
        else alert('you can only finish one challenge at a time');
        if (!addProgressBtn1) {
            scrollMoreDown();
        }
        else scrollProgress();

    }
    function addP2() {
        if (!addProgressBtn1 && !addProgressBtn3) {
            toggleDis2(!addProgressBtn2);
            toggleText2();
        }
        else alert('you can only finish one challenge at a time');
        if (!addProgressBtn2) {
            scrollMoreDown();
        }
        else scrollProgress();

    }
    function addP3() {
        if (!addProgressBtn2 && !addProgressBtn1) {
            toggleDis3(!addProgressBtn3);
            toggleText3();
            if (!addProgressBtn3) {
                scrollMoreDown();
            }
            else scrollProgress();
        }
        else alert('you can only finish one challenge at a time')
    }
    const [addProgressBtn1, toggleDis1] = useState(false);
    const [addProgressBtn2, toggleDis2] = useState(false);
    const [addProgressBtn3, toggleDis3] = useState(false);

    const [btnText1, toggleText1] = useCycle('Add to Progress', 'Give up Challenge');
    const [btnText2, toggleText2] = useCycle('Add to Progress', 'Give up Challenge');
    const [btnText3, toggleText3] = useCycle('Add to Progress', 'Give up Challenge');

    // addProgressBtn1=props.addProgressBtn1;
    // addProgressBtn2=props.addProgressBtn2;
    // addProgressBtn3=props.addProgressBtn3;
    // toggleDis1=props.toggleDis1;
    // toggleDis2=props.toggleDis2;
    // toggleDis3=props.toggleDis3;
    // btnText1=props.btnText1;
    // btnText2=props.btnText2;
    // btnText3=props.btnText3;
    // toggleText1=props.toggleText1;
    // toggleText2=props.toggleText2;
    // toggleText3=props.toggleText3;


    const Card1 = () => {
        return (<Card className="challengecard" >
            <Card.Body>
                <FormGroup >
                    <div className='row'>
                        <div className="col-12 col-md-10">
                            <Label for="exampleSelect"><b>Select Food Categories</b></Label></div>
                        <div className="col-12 col-md-2">
                            <Card.Img src={require('../challengeassets/questionmark.png')} className='questionmark'
                                onMouseOver={() => togglepopover4(!popover4)}
                                onMouseOut={() => togglepopover4(!popover4)}
                                id='ques1'
                            ></Card.Img>
                        </div>
                        <Popover placement="down" isOpen={popover4} target="ques1">
                            <PopoverHeader>Why we take eating challenge?</PopoverHeader>
                            <PopoverBody>Our food category is designed following the guide of healthy eating pyramid. The Healthy Eating Pyramid is a simple visual guide to the types and proportion of foods that we should eat every day for good health.</PopoverBody>
                        </Popover>
                    </div>
                    <Input type="select" name="select" id="exampleSelect" value={eatlvl2} onChange={(evt) => changelvl1(evt)} onPointerLeave={() => setEatingLength(eatingChallengelist[eatlvl - 1].length)} style={{ width: 150 }}>
                        <option>vegetables</option>
                        <option>fruits</option>
                        <option>grain food</option>
                        <option>meat and bean products</option>
                        <option>dairy products</option>
                    </Input>
                </FormGroup>
                <Card.Title style={{ textAlign: "center" }}>{eatingChallengelist[eatlvl - 1][eatingNo].challenge_desc}</Card.Title>
                <Card.Text style={{ textAlign: "center" }}><p><a>You need to eat </a>{eatingChallengelist[eatlvl - 1][eatingNo].quantity}</p>


                </Card.Text>
                <Card.Img src={require('./' + eatingChallengelist[eatlvl - 1][eatingNo].img_url)}
                    onMouseOver={() => togglepopover1(!popover1)} className="cardimg"
                    onMouseOut={() => togglepopover1(!popover1)}
                    id='img1'
                ></Card.Img>
                <Popover placement="right" isOpen={popover1} target="img1" >
                    <PopoverHeader>It contains</PopoverHeader>
                    <PopoverBody><p style={{ textAlign: "justify" }}>{eatingChallengelist[eatlvl - 1][eatingNo].nutrition}</p></PopoverBody>
                </Popover>
                <br />
                {!addProgressBtn1 &&
                    <Button className="cardbtn" onClick={() => changeEat()} color="warning">Change a Challenge</Button>}
                {addProgressBtn1 &&
                    <Button className="cardbtn" color="danger" onClick={() => { finishBtn() }}>FINISH</Button>}
                <br />
                <Button className="cardbtn" color="danger" onClick={() => addP1()} >{btnText1}</Button>

            </Card.Body>
        </Card>);
    }
    const Card2 = () => {
        return (<Card className="challengecard" >
            <Card.Body>
                <FormGroup>
                    <div className='row'>
                        <div className="col-12 col-md-10">
                            <Label for="exampleSelect"><b>Select Difficulty Level</b></Label></div>
                        <div className="col-12 col-md-2">
                            <Card.Img src={require('../challengeassets/questionmark.png')} className='questionmark'
                                onMouseOver={() => togglepopover5(!popover5)}
                                onMouseOut={() => togglepopover5(!popover5)}
                                id='ques2'
                            ></Card.Img>
                        </div>
                        <Popover placement="down" isOpen={popover5} target="ques2">
                            <PopoverHeader>Why we take not eating challenge?</PopoverHeader>
                            <PopoverBody>This “no eating challenge” is designed to lower the frequency of eating junk food. Eating junk food on a regular basis can lead to an increased risk of obesity and chronic diseases. 41% of teenagers’ daily energy intake (kilojoules) comes from junk food. This means junk food is taking the place of other more nutritious foods in our diets. You will have stomach to eat more nutritious food if you eat less junk food.</PopoverBody>
                        </Popover>
                    </div>
                    <Input type="select" name="select" id="exampleSelect" value={noeatlvl2} onChange={(evt) => changelvl3(evt)} style={{ width: 150 }}>
                        <option>easy</option>
                        <option>medium</option>
                        <option>difficult</option>

                    </Input>
                </FormGroup>
                <Card.Title style={{ textAlign: "center" }}>{noEatingChallengelist[noeatlvl - 1][noEatingNo].challenge_desc}</Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                    <p>{noEatingChallengelist[noeatlvl - 1][noEatingNo].quantity}</p>

                </Card.Text>


                <Card.Img src={require('./' + noEatingChallengelist[noeatlvl - 1][noEatingNo].img_url)} className="cardimg"
                    onMouseOver={() => togglepopover2(!popover2)}
                    onMouseOut={() => togglepopover2(!popover2)}
                    id='img2'
                ></Card.Img>


                <Popover placement="right" isOpen={popover2} target="img2" >
                    <PopoverHeader>Energy Save</PopoverHeader>
                    <PopoverBody> <p>{noEatingChallengelist[noeatlvl - 1][noEatingNo].nutrition}</p></PopoverBody>
                </Popover>
                <br />
                {!addProgressBtn2 &&
                    <Button className="cardbtn" onClick={() => changeNo()} color="warning">Change a Challenge</Button>}
                {addProgressBtn2 &&
                    <Button className="cardbtn" color="danger" onClick={() => { finishBtn() }}>FINISH</Button>}
                <br />
                <Button className="cardbtn" color="danger" onClick={() => addP2()} >{btnText2}</Button>

            </Card.Body>
        </Card>);
    }
    const Card3 = () => {
        return (<Card className="challengecard" >
            <Card.Body>
                <FormGroup>
                    <div className='row'>
                        <div className="col-12 col-md-10">
                            <Label for="exampleSelect"><b>Select Difficulty Level</b></Label></div>
                        <div className="col-12 col-md-2">
                            <Card.Img src={require('../challengeassets/questionmark.png')} className='questionmark'
                                onMouseOver={() => togglepopover6(!popover6)}
                                onMouseOut={() => togglepopover6(!popover6)}
                                id='ques3'
                            ></Card.Img>
                        </div>
                        <Popover placement="down" isOpen={popover6} target="ques3">
                            <PopoverHeader>Why we take exercising challenge?</PopoverHeader>
                            <PopoverBody>This exercise challenge is designed for burning fat and increase appetite. Exercise can helps boost your metabolism, meaning you burn more calories all day long. You will have the stomach to eat more nutritious food.</PopoverBody>
                        </Popover>
                    </div>
                    <Input type="select" name="select" id="exampleSelect" value={exerciselvl2} onChange={(evt) => changelvl2(evt)} onPointerLeave={() => setNoEatingLength(noEatingChallengelist[noeatlvl - 1].length)} style={{ width: 150 }} >
                        <option>easy</option>
                        <option>medium</option>
                        <option>difficult</option>

                    </Input>
                </FormGroup>
                <Card.Title style={{ textAlign: "center" }}>{exerciseChallengelist[exerciselvl - 1][exerciseNo].challenge_desc}</Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                    <p>{exerciseChallengelist[exerciselvl - 1][exerciseNo].quantity}</p>

                </Card.Text>
                <Card.Img src={require('./' + exerciseChallengelist[exerciselvl - 1][exerciseNo].img_url)} className="cardimg"
                    onMouseOver={() => togglepopover3(!popover3)}
                    onMouseOut={() => togglepopover3(!popover3)}
                    id='img3'
                ></Card.Img>
                <Popover placement="right" isOpen={popover3} target="img3" >
                    <PopoverHeader>Energy Burnt</PopoverHeader>
                    <PopoverBody> <p>{exerciseChallengelist[exerciselvl - 1][exerciseNo].nutrition}</p></PopoverBody>
                </Popover>
                <br />
                {!addProgressBtn3 &&
                    <Button className="cardbtn" onClick={() => changeEx()} color="warning">Change a Challenge</Button>}
                {addProgressBtn3 &&
                    <Button className="cardbtn" color="danger" onClick={() => { finishBtn() }}>FINISH</Button>}
                <br />
                <Button className="cardbtn" color="danger" onClick={() => addP3()} >{btnText3}</Button>
            </Card.Body>
        </Card>);
    }


    useEffect(() => {
        if (!props.login) {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <div className="container ">

            <div className="container allergytitle ">
                <div className="row challengetitle">
                    <div style={{ textAlign: "center", padding: 40 }}>
                        <a id="challengehead"></a>
                        <h1>Daily Challenge </h1>
                        <b><p>
                            Do you know a good eating habbit is the most efficient way to prevent nutritional deficeincy? Do you know exercise is also efficient to prevent nutritional deficiency?
                            Now start to finish our daily challenge and get diseases away.
                    </p></b>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-6 allergy-title" style={{ textAlign: "center" }}>
                        <b>Why play this game?</b>
                    </div>
                </div>
            </div>

            <div className="container challengebg">
                <div className="row" >
                    <div className="col-12 col-md-3">
                        <img src={require('../challengeassets/parents.png')} className="racemap"></img>
                    </div>
                    <div className="col-12 col-md-8 offset-md-1">
                        <p><b>A good eating habits is the most efficient way to prevent nutritional deficiency <br /><br /> Exercise can help your body absorb nutrients.

                        <br /> <br />
                        Our game provide you with food suggestions and exercise suggestions
                        <br /> <br />
                       You can play the game and see your progress along the way
                        </b></p>
                    </div>
                </div>
            </div>
            <div className="col-6 allergy-title" style={{ textAlign: "center" }}>
                <b>How to Play this game?</b>
            </div>
            <div className="container challengebg">
                <div className="row">
                    <div className="col-12 col-md-6 ">
                        <i>Log in to play this game is recommonded</i><br /><br />
                        <b>1. Pick a challenge below, change it if you want a different one.</b><br /><br />
                        <b>2. Adjust categories and difficulty levels to suit yourself.</b><br /><br />
                        <b>3. Add it to your progress! You can add 1 challenge at a time.</b><br /><br />
                        <b>4. Click FINISH after you completed the challenge! You will receive one challenge point!</b><br /><br />
                        <b>5. Click Give Up Challenge to change another challenge if you want.</b><br /><br />

                        {loginstatus(username, props.userchallenge.userchallenge.length)}
                    </div>
                    <div className="col-12 col-md-3 offset-md-2">
                        <img src={require('../challengeassets/note.png')} className="racemap"></img>
                    </div>
                </div>
            </div>
            <Modal isOpen={loginmodel} toggle={() => togglemodel(!loginmodel)} >
                <Card >
                    <Card.Body>
                        <FormGroup >
                            <Label for="login"><b>Enter Your Nickname</b></Label>
                            <Input type="input" id="login" value={username} onChange={(evt) => changeUsername(evt)} style={{ width: 200 }}>
                            </Input>
                        </FormGroup>
                        <FormGroup >
                            <Label for="passowrd"><b>Enter Your Passcode</b></Label>
                            <Input type="input" id="password" value={password} onChange={(evt) => changePassword(evt)} style={{ width: 200 }}>
                            </Input>
                        </FormGroup>

                        <Button className="float-left" onClick={() => verifycreate(username, password)} color="warning">Sign Up</Button>
                        <Button className="float-right" color="danger" onClick={() => verifyLogin(username, password)} >Log In</Button>

                    </Card.Body>
                </Card>
            </Modal>
            <div className="col-6  allergy-title" style={{ textAlign: "center" }}>
                <Element name="selectprogress"></Element>
                <b>Pick Your Challenges</b>
            </div>
            <div className="container challengebg">
                <div className="row">
                    <div className="col-12 col-md-4">
                        {!addProgressBtn1 && Card1()}

                    </div>
                    <div className="col-12 col-md-4">
                        {!addProgressBtn2 && Card2()}
                    </div>
                    <div className="col-12 col-md-4">
                        {!addProgressBtn3 && Card3()}
                    </div>
                </div>

            </div>
            <div className="col-6 allergy-title" style={{ textAlign: "center" }}>
                <Element name="progressE"></Element>
                <b>Check Your Progress</b>
            </div>


            <div className="container challengebg">
                <div className="row">
                    <div className="col-12 col-md-4">
                        {addProgressBtn1 && Card1()}
                    </div>
                    <div className="col-12 col-md-4">
                        {addProgressBtn2 && Card2()}
                    </div>
                    <div className="col-12 col-md-4">
                        {addProgressBtn3 && Card3()}
                    </div>
                </div>
                <div className="row" >
                    <div className="col-12 col-md-3 " >
                        <Button className="mapbtn" color="danger" onMouseEnter={() => window.dispatchEvent(new Event('resize'))} onClick={() => moveCar()} onPointerLeave={() => setExerciseLength(exerciseChallengelist[exerciselvl - 1].length)} >Click to Drive</Button>
                    </div>
                    <div className="col-12 col-md-6 cMap" >
                        <div className="col-12 col-md-8 offset-md-2">
                        </div>
                        <img src={require('../challengeassets/map.png')} className="racemap" ref={componentRef}></img>
                        <div className="col-4 col-md-4 ">
                            <motion.div animate={animate}>
                                {carchange(props.userchallenge.userchallenge.length)}

                            </motion.div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="mapbtn">
                            {loginstatus(username, props.userchallenge.userchallenge.length)}
                        </div>
                    </div>
                </div>

            </div>
            <div className="container">


            </div>
            <div className="col-6 allergy-title" style={{ textAlign: "center" }}>
                <b>Rankings Board</b>
            </div>
            <div className="container challengebg">
                <div className="row" style={{ justifyContent: "center" }}>
                    <div className="col-12 col-md-8 offset-md-2">
                        <Table borderless>
                            <thead>
                                <tr>
                                    <th>rank</th>
                                    <th>Name</th>
                                    <th>Challenges</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rankinglist()}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>

    );




}


export default ChallengeCom;
