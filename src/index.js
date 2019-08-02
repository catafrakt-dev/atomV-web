import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Login from './home/home'
import './index.css';
import history from 'history'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/login" component={Login} />
            {/*<Route path="/registration" component={} />*/}
            {/*<Route path="/test" component={} />*/}
        </div>
    </Router>
);

/*ReactDOM.render(routing, document.getElementById('root'));*/
ReactDOM.render((<BrowserRouter  history={history}><App/></BrowserRouter>), document.getElementById('root'));

serviceWorker.unregister();
