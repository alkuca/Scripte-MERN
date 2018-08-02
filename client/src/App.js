import React, { Component } from 'react';
import './App.css';
import Navbar from "./Navbar";
import Content from "./Content";
import {Provider} from "react-redux"
import store from "./store"
import {Route} from "react-router-dom"
import Register from "./Register"
import Login from "./Login"
import KolegijContent from "./KolegijContent";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App">
              <Route exact path="/" component={Navbar}/>
              <Route exact path="/" component={Content}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="/kolegij" component={Navbar}/>
              <Route path="/kolegij" component={KolegijContent}/>
          </div>
        </Provider>
    );
  }
}

export default App;
