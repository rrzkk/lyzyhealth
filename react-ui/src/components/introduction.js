import React, { Component } from 'react';

import { Clickable } from 'react-clickable';
import { Fade, Stagger } from 'react-animation-components';


class Introduction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: true
        }
    }

    toPageTwo = () => {
        this.setState({ page: !this.state.page });
    }

    render() {
        if (this.state.page) {
            return (
                <div className="Introduction">
                    <div className="container">

                        <Stagger delay={800} in>
                            <Fade in>
                                <div className="intospace">
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-4 introlist ">
                                        <ul >
                                            <h2>DO YOU KNOW???</h2>
                                            <p>Near all Australians (99%) aged 2 – 18 do not eat enough vegetables</p>
                                        </ul>
                                    </div>
                                </div>
                            </Fade>
                            <Fade in>

                                <div className="row">
                                    <div className="col-4 offset-md-1 col-md-4 introlist" >
                                        <ul >
                                            <h2>DO YOU KNOW???</h2>
                                            <p>41% of Australian teenagers’ energy intake <br />is from discretionary foods</p>

                                        </ul>
                                    </div>

                                    <div className="col-12 offset-md-2 col-md-5" id="introbutton" style={{ alignSelf: "center" }}>
                                        <Clickable><p id="change" onClick={()=>this.toPageTwo()}>Change it Now!</p></Clickable>
                                    </div>

                                </div>

                            </Fade>
                            <Fade in>
                                <div className="row">
                                    <div className="col-12 offset-md-2 col-md-4 introlist">
                                        <ul >
                                            <h2>DO YOU KNOW???</h2>
                                            <p>Result of above facts lead many Australian teenagers to nutritional deficiency and iron deficiency</p>
                                        </ul>
                                    </div>
                                </div>
                            </Fade>
                            <Fade in>
                                <div className="row">
                                    <div className="col-12 offset-md-3 col-md-4 introlist">
                                        <ul >
                                            <h2>DO YOU KNOW???</h2>
                                            <p>Nutritional deficiency lead to longest average bed days in Australia between 2017 – 2018 and most cases among them are caused by iron deficiency</p>
                                        </ul>
                                    </div>
                                </div>
                            </Fade>
                        </Stagger>

                        <div className="row">
                            <div className="col-12 offset-md-4 col-md-4">
                                <br></br>
                                <br></br>
                                <Clickable>
                                    <p onClick={this.props.onClick} id="intro1a">-- Go to Home --</p>
                                </Clickable>
                            </div>
                        </div>

                    </div>
                </div>

            );
        }
        else{
            return (
                <div className="Introduction">
                    <div className="container">

                        <Stagger delay={800} in>
                            <Fade in>
                                <div className="intospace">
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-4 introlist ">
                                        <ul >
                                            <h2>WE CAN HELP!!!</h2>
                                            <p>Near all Australians (99%) aged 2 – 18 do not eat enough vegetables</p>
                                        </ul>
                                    </div>
                                </div>
                            </Fade>
                            <Fade in>

                                <div className="row">
                                    <div className="col-4 offset-md-1 col-md-4 introlist" >
                                        <ul >
                                            <h2>WE CAN HELP!!!</h2>
                                            <p>We will give you ACHIEVABLE CHALLENGES for you to complete to STEP UP to a HEALTHIER LIFESTYLE</p>

                                        </ul>
                                    </div>

                                    <div className="col-12 offset-md-2 col-md-5" id="introbutton" style={{ alignSelf: "center" }}>
                                        <Clickable><p id="change" onClick={this.props.onClick}>Give A hug to HEALTH!!!</p></Clickable>
                                    </div>

                                </div>

                            </Fade>
                            <Fade in>
                                <div className="row">
                                    <div className="col-12 offset-md-2 col-md-4 introlist">
                                        <ul >
                                            <h2>WE CAN HELP!!!</h2>
                                            <p>We know some of you do not consume enough nutrition due to allergy, and WE ARE HERE to find the REPLACING FOOD JUST FOR YOU</p>
                                        </ul>
                                    </div>
                                </div>
                            </Fade>
                            <Fade in>
                                <div className="row">
                                    <div className="col-12 offset-md-3 col-md-4 introlist">
                                        <ul >
                                            <h2>DO YOU KNOW???</h2>
                                            <p>We know some of you do not take it seriously, and we will make sure you are always HEALTH AWARE.</p>
                                        </ul>
                                    </div>
                                </div>
                            </Fade>
                        </Stagger>

                        <div className="row">
                            <div className="col-12 offset-md-4 col-md-4">
                                <br></br>
                                <br></br>
                                <Clickable>
                                    <p onClick={this.props.onClick} id="intro1a">-- Go to Home --</p>
                                </Clickable>
                            </div>
                        </div>

                    </div>
                </div>

            );

        }
    }
   
}

export default Introduction;