import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {baseUrl} from '../react/baseUrl';


class Header extends Component {

    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    /*  <NavItem>
      <NavLink className="nav-link" id="navlink" to='/doctors'><span className="fa fa-list fa-lg"></span> Doctors</NavLink>
  </NavItem>*/
    render() {
      return(
      <React.Fragment>
        <Navbar id="navbar-dark" expand="md" sticky="top">
          <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/" id="navlink"><img alt="First slide" src={baseUrl+"assets/teamlogo.png" } height="50" width="60"/></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar className="headernav">
                            <Nav  className="headernav" >
                            <NavItem>
                                <NavLink className="nav-link" id="navlink" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" id="navlink" to='/diagnose'><span className="fa fa-info fa-lg"></span> Challenge </NavLink>
                            </NavItem>
                           
                            <NavItem>
                                <NavLink className="nav-link" id="navlink" to='/information'><span className="fa fa-address-card fa-lg"></span> Allergy</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" id="navlink" to='/about'><span className="fa fa-list fa-lg"></span> Knowledge </NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
        </Navbar>
       
      </React.Fragment>
      );
    }
  }
  
  export default Header;

  /*<Jumbotron>
             <div className="container">
                 <div className="row row-header">
                     <div className="col-12 col-sm-6">
                         <h1>LYZY Health</h1>
                         <p>Hi! We are LYZY, guess you are as lazy as we are? Join us to change your lifestyle from today, say goodby to lazy, say hi to LYZY!</p>
                     </div>
                 </div>
             </div>
         </Jumbotron>*/ 