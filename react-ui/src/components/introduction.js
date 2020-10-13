import React, { Component } from 'react';

import { Clickable } from 'react-clickable';



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

                       

                    </div>
                </div>

            );
        }
        else{
            return (
                <div className="Introduction">
                    <div className="container">

                      
                        <div className="row">
                            <div className="col-12 offset-md-4 col-md-4">
                                <br></br>
                                <br></br>
                                
                            </div>
                        </div>

                    </div>
                </div>

            );

        }
    }
   
}

export default Introduction;