import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import { App } from './modules/App';
import { Sources } from './modules/Sources';
import { About } from './modules/About';

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/sources" component={Sources}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>
), document.getElementById('root'));
