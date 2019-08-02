import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.scss';

import Home from "./home/home.jsx";
import Contact from "./login/login.jsx";

// app
export default class App extends React.Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/login' component={Contact}/>
            </Switch>
          </header>
        </div>
    )
  }
}
