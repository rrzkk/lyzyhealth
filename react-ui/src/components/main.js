import React, { Component } from 'react';
import Header from './header.js';
import { Button, FormGroup, Label, Input } from 'reactstrap';

import Home from './home.js';
import Diagnose from './diagnose.js';
import Doctors from './doctors.js';
import Information from './information.js';
import About from './about.js';
import ChallengeCom from './challenge.js';

import { connect } from 'react-redux';
import { fetchInformation, fetchAllChallenges, fetchNewChallenges, createUser, verifyUser, verifyRepeat, postChallenge, getUserChallenge, getAllUC, verifyPassword } from '../react/ActionCreators';





import { Switch, Route, Redirect, withRouter } from 'react-router-dom';


const mapStateToProps = state => {
    return {
        newchallenges: state.newchallenges,
        allchallenges: state.allchallenges,
        information: state.information,
        userchallenge: state.userchallenge,
        login: state.login,
        repeatuser: state.repeatuser,
        username: state.username,
        uc: state.uc
    }
}

const mapDispatchToProps = dispatch => ({

    fetchInformation: () => dispatch(fetchInformation()),
    fetchNewChallenges: () => dispatch(fetchNewChallenges()),
    fetchAllChallenges: () => dispatch(fetchAllChallenges()),
    createUser: (username, password) => dispatch(createUser(username, password)),
    verifyUser: (username, password) => dispatch(verifyUser(username, password)),
    verifyRepeat: (username, password) => dispatch(verifyRepeat(username, password)),
    postChallenge: (username) => dispatch(postChallenge(username)),
    getUserChallenge: (username) => dispatch(getUserChallenge(username)),
    getAllUC: () => dispatch(getAllUC()),
    verifyPassWord: (passwordhash,password)=>dispatch(verifyPassword(passwordhash,password))
})



class Maincomp extends Component {

    constructor(props) {
        super(props);
        this.state = { logInPage: true,passwordV:'' };
      
        this.toggleValue=this.toggleValue.bind(this);
        this.verifyLog=this.verifyLog.bind(this);
    }
    verifyLog(){
        if(this.state.passwordV==='ddd'){
         
          this.setState({
            logInPage:false
        });
          console.log("pass")
        }
        else{
            console.log("no pass")
        }
    }
    
    toggleValue(evt){
        this.setState(
            {
                passwordV:evt.target.value
            }
        )
    }

    componentDidMount() {

        // this.props.fetchNewChallenges();
        this.props.fetchInformation();
        this.props.fetchAllChallenges();
        this.props.getAllUC();
        // this.props.createUser('test2','test2');
        //this.props.verifyUser('test2','test2');
        // this.props.verifyRepeat('test2');
        //this.props.postChallenge('test1');
        //this.props.getUserChallenge('test1');
    }



    render() {
        const HomePage = () => {
            return (
                <Home />
            )
        }

        /*  const infor2Comp=({match})=>{
              return(<Information2 name={match.params.name}/>);
          }
  
          const info3Comp=({match})=>{
              return(<Information3
              name={match.params.name}
              selectedgroup={match.params.selectedgroup}
              />);
          }*/
        if (this.state.logInPage === true) {
            return (<div>
                <FormGroup>

                    <Label for="login"><b>Enter Your password</b></Label>
                    <Input type="input" id="login" value={this.state.passwordV} onChange={(evt) => this.toggleValue(evt)} style={{ width: 200 }}>
                    </Input>
                    <Button onClick={()=>this.verifyLog()}>Log in</Button>
                </FormGroup>
            </div>)
        }
        else {
            return (
                <div className="AllBackground">

                    <Header />


                    <Switch>
                        <Route exact path='/home' component={HomePage} />
                        <Route exact path='/diagnose' component={() => <ChallengeCom newchallenges={this.props.newchallenges}
                            userchallenge={this.props.userchallenge}
                            login={this.props.login.verified}
                            repeatuser={this.props.repeatuser.verified}
                            username={this.props.username}
                            uc={this.props.uc.uc}
                            verifyUser={(username, password) => this.props.verifyUser(username, password)}
                            createUser={(username, password) => this.props.createUser(username, password)}
                            verifyRepeat={(username, password) => this.props.verifyRepeat(username, password)}
                            postChallenge={(username) => this.props.postChallenge(username)}
                            getUserChallenge={(username) => this.props.getUserChallenge(username)}
                            verifyPassWord={(passhash,pass)=>this.props.verifyPassWord(passhash,pass)}
                        
                        />
                        } />
                        <Route exact path='/doctors' component={() => <Doctors />} />
                        <Route exact path='/information' component={() => <Information />} />
                        <Route exact path='/information/:name' />

                        <Route exact path='/about' component={About} />
                        <Redirect to="/home" />
                    </Switch>

                </div>
            );
        }
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Maincomp));
//background-image: url(background.jpg) !important;