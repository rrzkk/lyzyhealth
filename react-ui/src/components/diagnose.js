import React,{Component} from 'react';
import { Jumbotron } from 'reactstrap';
import Card from 'react-bootstrap/Card';
import { Button } from 'reactstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import {baseUrl} from '../react/baseUrl';

import { connect } from 'react-redux';





const mapStateToProps = state => {
  return {
    

    allchallenges:state.allchallenges
    
  }
}

class Diagnose extends Component {

  constructor(props) {
    super(props);
    this.state={
      challengeid: 0
    }
  }


  render(){
    
  

  return (
    <div>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-10">
              <h1>Daily Challenge</h1>
              <p>Yo! Can you finish the daily challenge here? Come and see how far can you go!</p>
            </div>
          </div>
        </div>
      </Jumbotron>
      <div className="row-content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <RenderChallenge challenge={this.props.allchallenges} thisthis={this} challengeid={this.state.challengeid}/>

            </div>
            <div className="col-12 col-md-3 offset-md-1">
              <ListGroup>
                <ListGroup.Item disabled><b>Ranking Board</b></ListGroup.Item>
                <ListGroup.Item>1. Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>2. Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>3. Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>4. Vestibulum at eros</ListGroup.Item>
                <ListGroup.Item>5. Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>6. Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>7. Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>8. Vestibulum at eros</ListGroup.Item>
                <ListGroup.Item>9. Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>10. Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </div>
          </div>

        </div>
      </div>
    </div>
  );}
}

function RenderChallenge(props) {

  if(props.challenge.isLoading !== true){


  const challengelength=props.challenge.allchallenges.length;
  return (
    <Card >
      <Card.Img variant="top" src={baseUrl+props.challenge.allchallenges[props.challengeid].picurl} />
      <Card.Body>
      <Card.Title>{props.challenge.allchallenges[props.challengeid].title}</Card.Title>
        <Card.Text>{props.challenge.allchallenges[props.challengeid].description}</Card.Text>
        <Button variant="primary" 
        onClick={()=>fetchnew(props.thisthis,props.challengeid,challengelength)}>Change a Challenge</Button>
        <Button variant="primary" className="ml-2">Done</Button>
      </Card.Body>
    </Card>
  );}
  else return(<h1>load</h1>)
}
function fetchnew(thisthis,challenge_id,challengelength){
  if(challenge_id<challengelength-1){
  thisthis.setState({
    challengeid: challenge_id+1
  })
  }
  else{
    thisthis.setState({
      challengeid: 0
    })
  }
}

export default connect(mapStateToProps)(Diagnose);   