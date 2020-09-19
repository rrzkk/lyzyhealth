import React, { Component } from 'react';
import './App.css';
import Maincomp from './components/main.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter} from 'react-router-dom';

import { Provider } from 'react-redux';
import { ConfigureStore } from './react/configureStore';
import  Introduction  from './components/introduction';
import { ParallaxProvider } from 'react-scroll-parallax';

const store = ConfigureStore();



class App extends Component {

 

 

  render(){


  return (
    <Provider store={store}>
    <BrowserRouter>
    <ParallaxProvider>
    <div className="App">
      <Maincomp />
        
      
    </div>
    </ParallaxProvider>
    </BrowserRouter>
    </Provider>
  );
}}

export default App;
